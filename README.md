
# How to run the tests

## Install project
```bash
npm i
npx playwright install
```
 ## Run tests in UI mode
```bash
npx playwright test --ui

## Run tests in headless mode
```bash
npx playwright test
```
 ## Generate report for headless run
```bash
npx playwright show-report
```

# Playlist-App

**Test Cases to Implement:**

1. **Search Functionality:**
   - Test the search input field for filtering the available tracks.
   - Ensure that when a user types a track name in the search box, only matching tracks are displayed.
2. **Add Track Using "+" Button:**
   - Test the ability to add a single track using the "+" button for a given track.
   - Ensure that clicking the "+" button next to a track adds it to the “Your Playlist” list
3. **Verify Total Duration of the Playlist in Seconds:**
   - Test that the total duration of all tracks in "Your Playlist" is accurately calculated and displayed in seconds.
   - Manually calculate the expected total duration by summing the durations of added tracks (in the format `"mm:ss"`) and verify that this matches the displayed total duration in the UI.

### Instructions

1. **Setting Up the Testing Environment:**
   - Set up a project using Playwright or Cypress.
   - Install the necessary dependencies and configure the project for running tests.
   - Create a test structure to organize the UI tests.
2. **Writing Test Cases:**
   - Implement the 3 test cases described in the section above.
   - Each test should be clear, concise, and verify that the core functionality is working as expected.
   - Make sure the tests are written in a maintainable way (e.g., using selectors properly, managing reusable logic).
   - 3. **Running Tests:**
   - Ensure that tests can be run in a headless mode or with a visible browser.
   - Include instructions in a README.md file explaining how to set up the testing environment and how to run the tests.

### Additional Requirements

1. **Environment Variables:**
   - If needed, use `.env` to store environment-specific variables like the base URL of the app.
   - Ensure that environment variables are securely loaded in the test setup.
2. **Code Quality:**
   - Use ESLint and Prettier to ensure consistent formatting and code quality.
   - Ensure that all files are properly linted and formatted before submission.
3. **Documentation:**
   - Include a `README.md` file with clear instructions on how to install the dependencies, set up the environment, and run the tests.
   - Ensure the documentation is easy to follow, as this will help us replicate the setup and verify your work.

### Submission Guidelines

1. **Separate Folders for Tests and Code:**
   - Organize your test scripts in a clear folder structure.
   - Include a folder for any utility functions or helpers that might be used across multiple test cases.
2. **Running Tests:**
   - Ensure that all tests can be run via a single command (e.g., `npm run test`).
   - If additional setup is required, include clear instructions in the README.md file.
3. **Final Deliverable:**
   - Your final submission should include:
     - All test scripts
     - A `README.md` file with setup and execution instructions
     - Any additional config files needed for the environment

### Additional Instructions

We will be testing your submission locally. Please ensure the following:

- **Instructions for Running:** Provide clear instructions on how to run the tests locally.
- **Test Coverage:** Focus on covering the main features and ensure that your tests are stable and reliable.

By following these instructions, we will be able to test your application smoothly and verify that the required functionalities are properly tested.
