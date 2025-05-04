import { test } from "@playwright/test";
import { MainPage } from "../src/pages/MainPage.js";
import { describe } from "node:test";

describe("Search functionality tests", () => {
  let mainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.open();
  });

  test("Assert the search result is present on the page", async ({ page }) => {
    await mainPage.assertSearchInputIsPresent();
  });
  test("Assert that the only matching tracks are displayed after typing in search input", async ({
    page,
  }) => {
    await mainPage.fillSearchInput();
    await mainPage.assertValueInSearchResults();
  });
});

// 1. **Search Functionality:**
//     - Test the search input field for filtering the available tracks.
//     - Ensure that when a user types a track name in the search box, only matching tracks are displayed.
