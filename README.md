# Automation Practice - Automation Exercise Web Application

This repository contains automated test scripts developed for the **Automation Exercise** web application as part of a QA assessment. The automation covers critical flows in **User Registration** and **User Login**, written in JavaScript using **Playwright**.

## Table of Contents
- [Automation Practice - Automation Exercise Web Application](#automation-practice---automation-exercise-web-application)
  - [Table of Contents](#table-of-contents)
    - [Tool Used](#tool-used)
  - [Project Structure](#project-structure)
  - [Setup and Installation](#setup-and-installation)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running Specific Tests](#running-specific-tests)
    - [Viewing Test Results](#viewing-test-results)
  - [Notes](#notes)

---

### Tool Used

- **Playwright**: For browser automation and testing.

---

## Project Structure

- **`tests/`**: Contains all Playwright test scripts for registration and login.
- **`README.md`**: Project overview and instructions for setup and execution.

---

## Setup and Installation

### Prerequisites

Ensure you have **Node.js** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jessikagomes/automation-assessment.git
   cd automation-assessment
1. Install dependencies, including Playwright:
   ```bash
    npm install
    npx playwright install
---

## Automated Tests

The automated test scripts cover the following scenarios:
1. **User Registration**: Ensuring that the registration flow handles valid inputs appropriately.
2. **User Login**: Verifying correct login attempts.
---

## Running the Tests

### Running All Tests

To execute all tests, use:
```bash
npx playwright test
```

### Running Specific Tests

To run a specific test file, use:
```bash
npx playwright test tests/<test-file-name>.spec.js
```

### Viewing Test Results

Playwright generates an HTML report after running tests. To view this report, run:
```bash
npx playwright show-report
```

This report provides detailed information on each test’s execution, including screenshots and logs.

---

## Notes

- **Environment**: The tests are configured to run on the default Playwright environment.
- **Configuration**: You can modify browser settings or test timeouts in the Playwright configuration file (`playwright.config.js`).

---
