# Playwright TypeScript E2E Framework

A professional end-to-end test automation portfolio project built with Playwright and TypeScript.

The project will demonstrate maintainable web automation, API testing, cross-browser execution, test-data management, reusable fixtures, Page Object Model architecture, reporting, and CI/CD integration with GitHub Actions.

## Current Status

The repository has been initialized with:

* Playwright Test
* TypeScript
* Chromium, Firefox, and WebKit
* GitHub Actions
* HTML reporting
* Initial login-page smoke tests

The framework will be expanded incrementally through reviewed feature branches and pull requests.

## Application Under Test

The initial application under test is SauceDemo, a demonstration e-commerce website containing authentication, product inventory, cart, and checkout workflows.

## Current Test Coverage

- Login form visibility
- Empty login submission
- Missing username validation
- Missing password validation
- Invalid credential rejection
- Standard-user authentication
- Locked-user rejection
- Error-message dismissal
- Cross-browser execution in Chromium, Firefox, and WebKit

## Test Documentation

- [Test Plan](docs/test-plan.md)
- [Initial Test Inventory](docs/test-inventory.md)
- [Exploratory Testing Notes](docs/exploratory-testing-notes.md)

## Technology Stack

* TypeScript
* Playwright Test
* Node.js
* npm
* Git
* GitHub Actions

## Framework Structure

```text
config/
└── environment.ts

pages/
└── login.page.ts

test-data/
├── login-messages.ts
└── users.ts

tests/
└── auth/
    └── login.spec.ts

## Local Setup

### Prerequisites

* Node.js 24 or another Playwright-supported Node.js release
* npm
* Git

### Install dependencies

```bash
npm ci
```

### Install Playwright browsers

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run Chromium tests:

```bash
npx playwright test --project=chromium
```

Run tests with a visible browser:

```bash
npx playwright test --project=chromium --headed
```

Run Playwright UI Mode:

```bash
npx playwright test --ui
```

Open the HTML report:

```bash
npx playwright show-report
```

## Planned Framework Capabilities

* Page Object Model
* Reusable fixtures
* Environment-based configuration
* Smoke and regression suites
* Positive and negative test coverage
* Authentication-state reuse
* API testing
* Combined API and UI workflows
* Test-data factories
* Screenshots, videos, and traces
* HTML and JUnit reports
* Linting and TypeScript validation
* GitHub Actions quality gates
* Test strategy and traceability documentation

## Working Principles

* Tests should be independent and repeatable.
* Locators should represent user-visible behavior where possible.
* Assertions should use Playwright’s auto-waiting matchers.
* Secrets must never be committed.
* Generated code must be reviewed before use.
* The main branch should remain stable.

## Author

**Saiduzzaman Sadi**
Software QA and Test Automation Engineer
Montreal, Quebec, Canada
