import { test } from "@playwright/test";
import { MainPage } from "../src/pages/MainPage.js";
import { describe } from "node:test";

describe("Adding to the “Your Playlist” list test", () => {
  let mainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.open();
  });

  test("Ensure a user can add track to the playlist", async ({ page }) => {
    await mainPage.assertAddToPlaylistButtonIsPresent();
    await mainPage.clickAddToPlaylistFirstButton();
    await mainPage.assertNameOfFirstTrackInPlaylist();
  });
});

// 2. **Add Track Using "+" Button:**
//    - Test the ability to add a single track using the "+" button for a given track.
//    - Ensure that clicking the "+" button next to a track adds it to the “Your Playlist” list
