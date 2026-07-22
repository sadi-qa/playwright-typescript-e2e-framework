# SauceDemo Test Plan

## 1. Document Information

| Field                   | Value                                                                             |
| ----------------------- | --------------------------------------------------------------------------------- |
| Project                 | Playwright TypeScript E2E Framework                                               |
| Application Under Test  | SauceDemo                                                                         |
| Test Level              | System and end-to-end testing                                                     |
| Test Types              | Functional, UI, integration-flow, compatibility, negative, and regression testing |
| Primary Automation Tool | Playwright Test with TypeScript                                                   |
| Document Status         | Initial version                                                                   |
| Author                  | Saiduzzaman Sadi                                                                  |

## 2. Purpose

This test plan defines the initial quality strategy for testing the SauceDemo sample e-commerce application.

The project is intended to demonstrate practical QA engineering skills, including exploratory testing, test planning, risk analysis, test-case design, maintainable browser automation, cross-browser execution, reporting, and CI/CD integration.

## 3. Objectives

The testing objectives are to:

1. Verify that supported users can authenticate successfully.
2. Verify that invalid or restricted users receive appropriate errors.
3. Validate inventory display and product sorting.
4. Validate product-detail navigation.
5. Validate cart addition, removal, quantity, and state behaviour.
6. Validate customer-information requirements.
7. Validate checkout pricing and completion.
8. Validate logout, menu, reset, and session behaviour.
9. Confirm critical workflows across Chromium, Firefox, and WebKit.
10. Build an automation suite that is independent, readable, and suitable for CI execution.

## 4. Scope

### 4.1 In Scope

The following areas are included:

* Login page
* Valid authentication
* Invalid authentication
* Required-field validation
* Locked-user behaviour
* Inventory page
* Product information
* Product sorting
* Product details
* Shopping cart
* Checkout information
* Checkout overview
* Order completion
* Application menu
* Logout
* Reset application state
* Browser refresh behaviour
* Direct authenticated-page access
* Desktop cross-browser execution

### 4.2 Out of Scope

The following areas are excluded from the initial project:

* Sauce Labs platform functionality
* Testing functionality on external websites
* Production security penetration testing
* High-volume load or performance testing
* Mobile native application testing
* Database validation
* Backend source-code testing
* Payment-provider integration
* Email or notification delivery
* Visual pixel-level comparison
* Full accessibility compliance certification

Accessibility checks and visual testing may be introduced later as separate enhancements.

## 5. Test Approach

### 5.1 Exploratory Testing

Manual exploratory testing will be performed before expanding automation.

The exploratory session will:

* Identify major user workflows.
* Confirm actual application behaviour.
* Capture exact validation messages.
* Identify state-management behaviour.
* Identify stable user-facing locators.
* Identify high-risk scenarios.
* Record potential defects or unusual behaviour.
* Validate assumptions before converting scenarios into automated tests.

### 5.2 Automated Functional Testing

Playwright Test with TypeScript will automate stable and repeatable workflows.

The automation suite will prioritize:

* Critical business paths
* High-risk negative scenarios
* Repeatable regression scenarios
* Cross-browser compatibility
* Deterministic assertions
* Independent test execution

Tests should not depend on execution order.

### 5.3 Cross-Browser Testing

The initial automated suite will run against:

* Chromium
* Firefox
* WebKit

Critical smoke tests will run on every pull request. A broader regression suite may run on merges to `main` and on a scheduled workflow.

### 5.4 Locator Strategy

Preferred locator order:

1. Accessible role and name
2. Associated label
3. Placeholder
4. Visible text
5. Alternative text
6. Stable test ID
7. Stable CSS selector only when no stronger user-facing option exists

Fragile selectors based on DOM position, long CSS chains, or generated class names should be avoided.

### 5.5 Test Isolation

Every automated test should be independently executable.

Tests must not:

* Depend on a previous test logging in
* Depend on a previous test adding products
* Depend on execution order
* Share mutable state without controlled fixtures
* Require another test to clean up data

Shared setup may be implemented through fixtures or `beforeEach` hooks while maintaining independent browser contexts.

## 6. Test Data

The project will use only demonstration credentials and synthetic customer data.

Example synthetic checkout data:

| Field       | Example |
| ----------- | ------- |
| First name  | Sadi    |
| Last name   | Tester  |
| Postal code | H3H 1A1 |

No personal, confidential, production, or financial information will be committed.

Credentials that are publicly displayed by the demonstration application may initially be stored in test-data configuration. Environment variables will be introduced to demonstrate professional configuration management.

## 7. Test Environment

| Component        | Current Configuration     |
| ---------------- | ------------------------- |
| Operating System | Windows x64               |
| Node.js          | 24.18.0                   |
| npm              | 11.6.0                    |
| Playwright       | 1.61.1                    |
| Language         | TypeScript                |
| Browsers         | Chromium, Firefox, WebKit |
| CI Platform      | GitHub Actions            |
| Source Control   | Git and GitHub            |

The public SauceDemo environment may change without notice because it is not controlled by this portfolio project.

## 8. Risk Analysis

| Risk                                                      | Impact | Likelihood | Mitigation                                                                   |
| --------------------------------------------------------- | ------ | ---------- | ---------------------------------------------------------------------------- |
| Public demo application becomes unavailable               | High   | Medium     | Record dependency and avoid treating outages as framework defects            |
| Application content changes                               | Medium | Medium     | Prefer stable user-facing locators and review failures before updating tests |
| Shared application state affects tests                    | High   | Low        | Use isolated browser contexts and controlled setup                           |
| Tests become dependent on execution order                 | High   | Medium     | Design every test to prepare its own state                                   |
| Cross-browser behaviour differs                           | Medium | Medium     | Run critical flows on all configured browsers                                |
| Hard-coded credentials or data become difficult to manage | Medium | Medium     | Move reusable values into configuration and test-data modules                |
| Overuse of UI setup makes tests slow                      | Medium | Medium     | Introduce fixtures and authenticated state where appropriate                 |
| Generated test code becomes difficult to maintain         | Medium | Medium     | Review and refactor generated code before committing                         |
| External website behaviour breaks tests                   | Medium | Medium     | Avoid testing third-party functionality                                      |
| False failures reduce confidence                          | High   | Medium     | Use reliable locators, web-first assertions, and trace evidence              |

## 9. Priority Definitions

### P0: Critical

Failure prevents the main purchasing workflow or makes the application unusable.

Examples:

* Valid user cannot log in.
* Product cannot be added to cart.
* Checkout cannot be completed.

### P1: High

Failure affects an important function but may have a workaround.

Examples:

* Cart count is incorrect.
* Product removal fails.
* Sorting produces incorrect results.
* Logout does not terminate the session.

### P2: Medium

Failure affects secondary functionality, usability, or presentation.

Examples:

* Error-close control does not work.
* Product information is inconsistent.
* Menu navigation behaves unexpectedly.

### P3: Low

Minor presentation or non-critical usability issue.

Examples:

* Cosmetic misalignment
* Inconsistent spacing
* Minor text formatting

## 10. Automation Selection Criteria

A scenario is a strong automation candidate when it is:

* Repeatable
* Deterministic
* Frequently executed
* Business-critical
* Suitable for regression
* Supported by stable data
* Supported by reliable assertions

A scenario may remain manual when it is:

* Highly visual
* Subjective
* Infrequently executed
* Dependent on an uncontrolled external service
* Better suited to exploratory testing
* Difficult to verify reliably without disproportionate complexity

## 11. Entry Criteria

Testing may begin when:

* The application is accessible.
* The repository dependencies are installed.
* Playwright browsers are installed.
* The current branch is synchronized.
* Test credentials are available from the demonstration application.
* The planned scenario is documented.
* No known local environment issue blocks execution.

## 12. Exit Criteria

The initial framework milestone is complete when:

* All P0 scenarios are automated.
* Selected P1 scenarios are automated.
* Critical tests pass in Chromium, Firefox, and WebKit.
* GitHub Actions passes.
* No unresolved critical framework defect remains.
* Reports and traces are available for failed CI executions.
* The README contains accurate execution instructions.
* Test-plan and inventory documents match the implemented suite.
* Known application issues and project limitations are documented.

## 13. Defect Management

Potential defects should be documented with:

* Defect title
* Environment
* Preconditions
* Reproduction steps
* Expected result
* Actual result
* Severity
* Priority
* Screenshot or trace
* Reproducibility
* Additional observations

A test automation failure must be investigated before being classified as an application defect.

Possible failure categories include:

* Application defect
* Test-code defect
* Locator defect
* Test-data defect
* Environment issue
* Network issue
* Expected application behaviour
* Unknown, requiring investigation

## 14. Reporting

Local and CI execution should provide:

* Terminal test summary
* HTML report
* Browser and project name
* Test duration
* Failure message
* Screenshot on failure
* Trace on retry or failure
* Video when configured
* GitHub Actions status

## 15. Planned Deliverables

* Test plan
* Test inventory
* Exploratory testing notes
* Page Object Model
* Test-data module
* Reusable fixtures
* Smoke suite
* Regression suite
* Cross-browser configuration
* GitHub Actions workflows
* HTML and JUnit reports
* Traceability mapping
* Sample defect report
* Framework architecture diagram

## 16. Limitations

* The project does not control the application or its deployment.
* The project does not have direct database or API access.
* Test data cannot be created or removed through a controlled backend.
* Public demo credentials and application behaviour may change.
* Results represent the tested environment and time, not a production certification.
