# SauceDemo Exploratory Testing Notes

## Session Information

| Field                | Value                            |
| -------------------- | -------------------------------- |
| Tester               | Saiduzzaman Sadi                 |
| Application          | SauceDemo                        |
| Session Type         | Initial exploratory testing      |
| Browser              | Google Chrome                    |
| Operating System     | Windows x64                      |
| Date                 | July 22,2026      |
| Start Time           | Replace with start time          |
| End Time             | Replace with end time            |
| Build or Environment | Public demonstration environment |

## Session Charter

Explore the main SauceDemo customer journey from login through order completion.

Focus on:

* Functional correctness
* Required-field validation
* Product and pricing consistency
* Cart state
* Checkout calculations
* Navigation
* Session termination
* Behaviour suitable for reliable automation

## Credentials and Test Data

Use only credentials publicly displayed by the demonstration application.

Synthetic checkout data:

| Field       | Value   |
| ----------- | ------- |
| First name  | Sadi    |
| Last name   | Tester  |
| Postal code | H3H 1A1 |

## Observation Status

Use one of the following:

* Pass
* Issue
* Not tested
* Needs investigation
* Expected demo behaviour

## Login Observations

| Area                        | Observation                          | Status     |
| --------------------------- | ------------------------------------ | ---------- |
| Login controls visible      | Login controls are visible            | Passed |
| Password masked             | Password was masked            | Passed |
| Empty form validation       | Epic sadface: Username is required                 | Passed |
| Missing password validation | Epic sadface: Password is required                 | Passed |
| Missing username validation | Epic sadface: Username is required                 | Passed |
| Invalid credentials         | Epic sadface: Username and password do not match any user in this service                 | Passed |
| Standard user login         | Logged in successfully & URL: https://www.saucedemo.com/inventory.html        | Passed |
| Locked user                 | Epic sadface: Sorry, this user has been locked out.                 | Passed |
| Error close control         | Error messages dissappears                        | Passed |
| Keyboard navigation         | Keyboard navigation passed | Passed |

## Inventory Observations

| Area                  | Observation                              | Status     |
| --------------------- | ---------------------------------------- | ---------- |
| Product count         | Total 6 Products                             | Passed |
| Product information   | Product information is displayed      | Passed |
| Name ascending sort   | First product: Sauce Labs Backpack; Last Product: Test.allTheThings() T-Shirt (Red)           | Passed |
| Name descending sort  | First product: Test.allTheThings() T-Shirt (Red); Last Product: Sauce Labs Backpack           | Passed |
| Price ascending sort  | First Price: $7.99; Last Price: $49.99             | Passed |
| Price descending sort | First Price: $49.99 ; Last price: $7.99             | Passed |
| Refresh behaviour     | Session state do not Persist | Failed |

## Product Details Observations

| Area                    | Observation   | Status     |
| ----------------------- | ------------- | ---------- |
| Product-name navigation | Navigated to product details page | Pass |
| Name consistency        | Name is consistant | Pass |
| Description consistency | Description is consistant | Pass |
| Price consistency       | Price is consistant | Pass |
| Image consistency       | Image is consistant | Pass |
| Back to products        | Navigates back to all products page | Pass |

## Cart Observations

| Area                    | Observation                       | Status     |
| ----------------------- | --------------------------------- | ---------- |
| Add one product         | Button changed to "Remove" and cart badge increased to "1" | Passed |
| Add multiple products   | 3 products added and 3 contents         | Passed |
| Remove from inventory   | Removes product from cart and badge count decreased                     | Passed |
| Remove from cart        | Product removed and badge number decreased                     | Passed |
| Product name and price  | Consistant                | Passed |
| Quantity                | Displayed quantity: 1 for each Item; Added 2 item         | Passed |
| Continue shopping       | State is preserved         | Passed |
| Refresh cart            | Previous state after adding product to cart is preserved         | Passed |
| Reset application state | Cart badge is removed                     | Passed |

## Checkout Information Observations

| Area                | Observation                  | Status     |
| ------------------- | ---------------------------- | ---------- |
| Empty submission    | "Thank you for your order!
Your order has been dispatched, and will arrive just as fast as the pony can get there!"         | Passed |
| Missing first name  | "Error: First Name is required"         | Passed |
| Missing last name   | "Error: Last Name is required"         | Passed |
| Missing postal code | "Error: Postal Code is required"         | Passed |
| Valid information   | "Navigates to overview Page"     | Passed |
| Cancel              | Redirects to previous page and Item cart Holds the product | Passed |

## Checkout Overview Observations

| Area              | Observation                  | Status     |
| ----------------- | ---------------------------- | ---------- |
| Selected products | Selected products are displayed with price and quantity along with total price calculation with & without tax                | Passed |
| Item total        | Record value: $89.97                 | Passed |
| Tax               | Record value: $7.20                 | Passed |
| Final total       | Record value: $97.17                 | Passed |
| Calculation check | Record calculation: Final value = Item total  + Tax           | Passed |
| Cancel            | Record destination: Product page (https://www.saucedemo.com/inventory.html) and State: Items in cart | Passed |

## Order Completion Observations

| Area                  | Observation       | Status     |
| --------------------- | ----------------- | ---------- |
| Finish order          | Record result:  "Thank you for your order!
Your order has been dispatched, and will arrive just as fast as the pony can get there!"     | Passed |
| Confirmation heading  | Record exact text: "Thank you for your order!" | Passed |
| Confirmation message  | Record exact text: "Your order has been dispatched, and will arrive just as fast as the pony can get there!" | Passed |
| Back Home             | Record result: Redirects to all product page and cart is empty     | Passed |
| Cart after completion | Record result: No item in cart    | Passed |

## Menu and Session Observations

| Area                                  | Observation               | Status     |
| ------------------------------------- | ------------------------- | ---------- |
| Open menu                             | Record result: Drawer opens from left to right; Menu Items Displayed             | Passed |
| Close menu                            | Record result: Drawer Closes from right to left; Menu items dissapears            | Passed |
| All Items                             | Record result: Displays all items             | Passed |
| About destination                     | Record destination only: Redirects to: "https://saucelabs.com/"   | Passed |
| Logout                                | Record result: User is logged out             | Passed |
| Back button after logout              | Record security behaviour: "Epic sadface: You can only access '/inventory.html' when you are logged in." | Passed |
| Direct inventory URL while logged out | Record result  : "Epic sadface: You can only access '/inventory.html' when you are logged in."           | Passed |

## Potential Defects

Add one section for every potential defect.

### DEFECT-001: Replace with concise defect title

**Status:** Candidate, not yet confirmed
**Severity:** Replace
**Priority:** Replace
**Reproducibility:** Replace

**Environment**

* Browser:
* Operating system:
* Application URL:
* Date:

**Preconditions**

1. Replace with precondition.

**Steps to Reproduce**

1. Replace with step.
2. Replace with step.
3. Replace with step.

**Expected Result**

Replace with expected behaviour.

**Actual Result**

Replace with observed behaviour.

**Evidence**

* Screenshot:
* Video:
* Console information:
* Additional notes:

**Investigation Notes**

Confirm whether this is:

* An application defect
* Intentional demonstration behaviour
* Browser-specific behaviour
* Environment behaviour
* Incorrect test expectation
* An issue requiring more information

## Automation Notes

Record useful implementation observations here.

Examples:

* Stable accessible name:
* Useful placeholder:
* Stable visible text:
* State that must be prepared:
* State that must be cleaned:
* Scenario suitable for `beforeEach`:
* Scenario suitable for reusable fixture:
* Scenario unsuitable for automation:
* Browser-specific difference:
* Potential flaky interaction:

## Session Summary

### What Worked

Replace with verified positive observations.

### Issues Found

Replace with confirmed or candidate issues.

### Main Risks

Replace with the most important product or automation risks.

### Recommended Automation Order

1. Replace after exploration.
2. Replace after exploration.
3. Replace after exploration.

### Follow-Up Work

* Confirm candidate defects.
* Update test inventory status.
* Identify stable locators.
* Create the initial page objects.
* Implement authentication tests.
* Implement the smoke purchasing workflow.
