import { test } from "@playwright/test";
import { MainPage } from "../src/pages/MainPage.js";
import { describe } from "node:test";

describe("Verify Total Duration of the Playlist in Seconds", () => {
  let mainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.open();
  });

  test("Ensure the displayed duration matches the calculated total duration in seconds", async ({
    page,
  }) => {
    await mainPage.clickAddToPlaylistFirstButton();
    await mainPage.clickAddToPlaylistSecondButton();
    await mainPage.assertDurationTimeInTotalMatchDurationInPlaylist();
  });
});

// 3. **Verify Total Duration of the Playlist in Seconds:**
//    - Test that the total duration of all tracks in "Your Playlist" is accurately calculated and displayed in seconds.
//    - Manually calculate the expected total duration by summing the durations of added tracks
//       (in the format `"mm:ss"`) and verify that this matches the displayed total duration in the UI.
