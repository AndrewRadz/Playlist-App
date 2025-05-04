const { expect } = require("@playwright/test");
import {
  generateRandomLetters,
  sumOfDurations,
  convertToSeconds,
} from "../utils.js";

export class MainPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", {
      name: "Search",
    });
    this.randomLetters = "";
    this.notFoundText = page.getByText("Not found");
    this.addToPlaylistFirstButton = page
      .getByRole("button")
      .filter({
        hasText: "+",
      })
      .nth(0);
    this.addToPlaylistSecondButton = page
      .getByRole("button")
      .filter({
        hasText: "+",
      })
      .nth(1);
    this.tracksInList = page.locator(
      "div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4.css-1udb513",
    );

    this.firstTrackInList = this.tracksInList.nth(0);

    this.yourPlaylistSection = page.locator("#playlist");

    this.durationOfFirstTrack = this.yourPlaylistSection
      .locator("div.MuiGrid-container > div:nth-child(3) p")
      .first();
    this.durationOfSecondTrack = this.yourPlaylistSection
      .locator("div.MuiGrid-container > div:nth-child(3) p")
      .nth(1);
    this.playlistDuration = page.getByTestId("playlist-duration");
  }

  async open() {
    await this.page.goto("/");
  }

  async assertSearchInputIsPresent() {
    await expect(this.searchInput).toBeVisible();
  }

  async fillSearchInput() {
    // Fill the search input with random letters
    this.randomLetters = generateRandomLetters();
    await this.searchInput.fill(this.randomLetters);
  }

  async assertValueInSearchResults() {
    const count = await this.tracksInList.count();

    for (let i = 0; i < count; i++) {
      // Iterate through all items
      const item = this.tracksInList.nth(i);
      const innerText = (await item.innerText()).toLowerCase();
      expect(innerText).toContain(this.randomLetters.toLowerCase());
    }
    if (count === 0) {
      await expect(this.notFoundText).toBeVisible();
    }
  }
  async assertAddToPlaylistButtonIsPresent() {
    // Check if the "+" button is present
    await expect(this.addToPlaylistFirstButton).toBeVisible();
  }
  async clickAddToPlaylistFirstButton() {
    await this.addToPlaylistFirstButton.click();
  }
  async clickAddToPlaylistSecondButton() {
    await this.addToPlaylistSecondButton.click();
  }

  async assertNameOfFirstTrackInPlaylist() {
    // Check if the name of the first track in the playlist is present
    await this.yourPlaylistSection.waitFor({ state: 'visible', timeout: 10000 });
    const nameOfFirstTrack = await this.firstTrackInList.innerText();
    expect(this.yourPlaylistSection).toContainText(nameOfFirstTrack);
  }
  async assertDurationTimeInTotalMatchDurationInPlaylist() {
    // Check if the duration of the first track in the playlist is present
    const durationOfFirstTrack = await this.durationOfFirstTrack.innerText();
    const durationOfSecondTrack = await this.durationOfSecondTrack.innerText();

    const totalDuration = sumOfDurations(
      durationOfFirstTrack,
      durationOfSecondTrack,
    );
    const totalDurationInSeconds = convertToSeconds(totalDuration);
    const displayedPlaylistDuration = await this.playlistDuration.innerText();

    expect(displayedPlaylistDuration).toBe(totalDurationInSeconds.toString()); // Check if the displayed duration matches the calculated total duration
  }
}
