# Playwright TypeScript E2E Framework

A professional end-to-end test automation portfolio project built with Playwright and TypeScript.

This project demonstrates maintainable web automation, cross-browser configuration, reusable test data, Page Object Model architecture, reporting, test traceability, and CI/CD integration with GitHub Actions.

## Current Status

The framework currently includes:

- Playwright Test with TypeScript
- Authentication test coverage
- Inventory test coverage
- Positive and negative test scenarios
- Page Object Model implementation for authentication
- Environment-based configuration
- Reusable test data
- Smoke, regression, and inventory execution tags
- Chromium, Firefox, and WebKit browser projects
- Playwright HTML reporting
- GitHub Actions integration
- Test planning and traceability documentation

The framework is being expanded incrementally through reviewed feature branches and pull requests.

## Application Under Test

The application under test is [SauceDemo](https://www.saucedemo.com), a demonstration e-commerce website containing authentication, product inventory, cart, and checkout workflows.

## Current Test Coverage

### Authentication

- Login form visibility
- Empty login submission
- Missing username validation
- Missing password validation
- Invalid credential rejection
- Standard-user authentication
- Locked-user rejection
- Error-message dismissal

### Inventory

- Inventory page and essential controls
- Product count
- Product names and prices
- Product descriptions and images
- Product action controls
- Name sorting from A to Z
- Name sorting from Z to A
- Price sorting from low to high
- Price sorting from high to low

### Shopping Cart

- Add one product
- Add multiple products
- Cart badge count
- Remove product from inventory
- Remove product from cart
- Product name, price, and quantity validation
- Continue shopping with preserved cart state

### Browser Configuration

The framework contains Playwright projects for:

- Chromium
- Firefox
- WebKit

Chromium is used for primary local development and targeted execution. The complete suite can also be executed against Firefox and WebKit.

## Test Documentation

- [Test Plan](docs/test-plan.md)
- [Test Inventory](docs/test-inventory.md)
- [Exploratory Testing Notes](docs/exploratory-testing-notes.md)

## Technology Stack

- TypeScript
- Playwright Test
- Node.js
- npm
- Git
- GitHub
- GitHub Actions

## Framework Structure

```text
playwright-typescript-e2e-framework
├── config
│   └── environment.ts
├── docs
│   ├── exploratory-testing-notes.md
│   ├── test-inventory.md
│   └── test-plan.md
├── fixtures
│   └── auth.fixture.ts
├── pages
│   ├── cart.page.ts
│   ├── inventory.page.ts
│   └── login.page.ts
├── test-data
│   ├── login-messages.ts
│   ├── products.ts
│   └── users.ts
├── tests
│   ├── auth
│   │   └── login.spec.ts
│   ├── cart
│   │   └── cart.spec.ts
│   └── inventory
│       └── inventory.spec.ts
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

### Directory Responsibilities

- `config` contains environment and application configuration.
- `docs` contains the test plan, test inventory, and exploratory testing notes.
- `pages` contains Page Object Model classes.
- `test-data` contains reusable users and expected validation messages.
- `tests` contains traceable automated test specifications.

## Prerequisites

Install the following software before running the project locally:

- Git
- Node.js LTS
- npm
- Visual Studio Code or another code editor

npm is included with the standard Node.js installation.

Verify the installations:

```powershell
git --version
node --version
npm --version
```

Each command should display an installed version number.

## Local Setup

### 1. Clone the repository

```powershell
git clone https://github.com/sadi-qa/playwright-typescript-e2e-framework.git
```

### 2. Navigate to the project directory

```powershell
cd playwright-typescript-e2e-framework
```

### 3. Install project dependencies

Use `npm ci` to install the exact dependency versions recorded in `package-lock.json`:

```powershell
npm ci
```

`npm ci` is recommended for cloned repositories and CI environments because it performs a clean, reproducible installation.

### 4. Install Playwright browsers

```powershell
npx playwright install
```

### 5. Create the local environment file

Create `.env` from the provided `.env.example` file:

```powershell
Copy-Item .env.example .env
```

Review the generated `.env` file and confirm that it contains the required SauceDemo configuration.

Example:

```env
BASE_URL=https://www.saucedemo.com
STANDARD_USER=standard_user
LOCKED_OUT_USER=locked_out_user
PASSWORD=secret_sauce
```

The `.env` file is intended for local configuration and must not be committed to Git.

## Running Tests

### Run the complete test suite

```powershell
npm test
```

Alternatively:

```powershell
npx playwright test
```

### Run Chromium tests

```powershell
npx playwright test --project=chromium
```

### Run Firefox tests

```powershell
npx playwright test --project=firefox
```

### Run WebKit tests

```powershell
npx playwright test --project=webkit
```

### Run tests with a visible browser

```powershell
npx playwright test --project=chromium --headed
```

### Run Playwright UI Mode

```powershell
npx playwright test --ui
```

### List discovered tests

```powershell
npx playwright test --list
```

## Targeted Test Execution

The framework uses tags to support targeted test execution.

### Available Tags

- `@smoke`
- `@regression`
- `@inventory`

### Run smoke tests

```powershell
npm run test:smoke
```

Alternatively:

```powershell
npx playwright test --grep "@smoke"
```

### Run regression tests

```powershell
npx playwright test --grep "@regression"
```

### Run inventory tests

```powershell
npm run test:inventory
```

Alternatively:

```powershell
npx playwright test --grep "@inventory"
```

### Run authentication tests

```powershell
npx playwright test tests/auth
```

### Run a specific test by title

```powershell
npx playwright test --grep "INV-005"
```

## Debugging Tests

### Run a test in Playwright debug mode

```powershell
npx playwright test --grep "INV-005" --project=chromium --debug
```

### Run a specific test file

```powershell
npx playwright test tests/inventory/inventory.spec.ts --project=chromium
```

### Run with a visible browser

```powershell
npx playwright test tests/inventory/inventory.spec.ts --project=chromium --headed
```

### Run shopping cart tests

```powershell
npm run test:cart
```

### Generate a trace

```powershell
npx playwright test --trace on
```

## Test Reporting

Playwright generates an HTML report after test execution.

Open the latest report:

```powershell
npm run report
```

Alternatively:

```powershell
npx playwright show-report
```

The report may include:

- Test results
- Execution duration
- Browser and project information
- Failure messages
- Screenshots
- Videos
- Traces
- Retry information

The available diagnostic artifacts depend on the settings in `playwright.config.ts`.

## TypeScript Validation

Run TypeScript validation without generating compiled files:

```powershell
npx tsc --noEmit
```

This command helps identify type errors that may not prevent Playwright from starting a test run.

## Implemented Framework Capabilities

- Playwright Test with TypeScript
- Page Object Model for authentication
- Environment-based configuration
- Reusable test data
- Positive and negative authentication testing
- Inventory content validation
- Inventory sorting validation
- Smoke, regression, and inventory tags
- Cross-browser project configuration
- Playwright HTML reporting
- Screenshots, videos, and traces based on configuration
- GitHub Actions integration
- Test planning and traceability documentation

## Planned Enhancements

- Inventory Page Object Model
- Reusable authenticated fixtures
- Authentication-state reuse
- Cart workflow coverage
- Checkout workflow coverage
- API testing
- Combined API and UI workflows
- Test-data factories
- JUnit reporting
- ESLint and formatting validation
- Additional GitHub Actions quality gates
- Expanded cross-browser execution evidence

## Working Principles

- Tests should be independent and repeatable.
- Tests should clearly represent user behavior and business expectations.
- Locators should prioritize stable and user-visible attributes.
- Assertions should use Playwright's auto-waiting matchers.
- Test data and configuration should remain separate from test logic.
- Secrets and local environment files must never be committed.
- Generated code must be reviewed before use.
- Test documentation should remain aligned with automated coverage.
- The `main` branch should remain stable.
- Changes should be introduced through focused feature branches and pull requests.

## Author

**Saiduzzaman Sadi**  
Software QA and Test Automation Engineer  
Montreal, Quebec, Canada