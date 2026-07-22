# SauceDemo Initial Test Inventory

## Status Definitions

| Status    | Meaning                                 |
| --------- | --------------------------------------- |
| Planned   | Scenario identified but not implemented |
| Automated | Automated test implemented and active   |
| Manual    | Intended primarily for manual execution |
| Blocked   | Cannot currently be executed            |
| Review    | Requires additional investigation       |

## Automation Levels

| Value  | Meaning                                           |
| ------ | ------------------------------------------------- |
| Yes    | Strong automation candidate                       |
| Later  | Valuable but not part of the immediate milestone  |
| Manual | Better suited to exploratory or manual validation |

## Test Inventory

| ID           | Module               | Scenario                                 | Expected Result                                                    | Priority | Test Type                 | Automation | Status    |
| ------------ | -------------------- | ---------------------------------------- | ------------------------------------------------------------------ | -------- | ------------------------- | ---------- | --------- |
| LOGIN-001 | Login | Display login controls | Username, password, and Login controls are visible | P0 | Smoke, UI | Yes | Automated |
| LOGIN-002 | Login | Submit empty login form | Required username validation is displayed | P1 | Negative | Yes | Automated |
| LOGIN-003 | Login | Submit username without password | Required password validation is displayed | P1 | Negative | Yes | Automated |
| LOGIN-004 | Login | Submit password without username | Required username validation is displayed | P1 | Negative | Yes | Automated |
| LOGIN-005 | Login | Submit invalid username and password | Authentication error is displayed and login is rejected | P1 | Negative | Yes | Automated |
| LOGIN-006 | Login | Log in with standard user | User is redirected to inventory | P0 | Smoke, Functional | Yes | Automated |
| LOGIN-007 | Login | Log in with locked user | Locked-user error is displayed | P1 | Negative | Yes | Automated |
| LOGIN-008 | Login | Close displayed error | Error banner closes correctly | P2 | UI | Yes | Automated |
| LOGIN-009 | Login | Submit valid credentials using keyboard | Login succeeds through normal keyboard navigation | P2 | Accessibility, Functional | Later | Planned |
| AUTH-001     | Authorization        | Open inventory URL while logged out      | Unauthorized user is rejected or redirected appropriately          | P0       | Security, Negative        | Yes        | Planned   |
| AUTH-002     | Authorization        | Use Back after logout.                    | Protected content is not usable after logout                       | P1       | Security, Session         | Yes        | Planned   |
| INV-001      | Inventory            | Display inventory page                   | Product list and essential page controls are visible               | P0       | Smoke, UI                 | Yes        | Planned   |
| INV-002      | Inventory            | Validate product information             | Every product displays name, description, image, price, and action | P1       | Functional, UI            | Yes        | Planned   |
| INV-003      | Inventory            | Sort products by name ascending          | Products appear in ascending alphabetical order                    | P1       | Functional                | Yes        | Planned   |
| INV-004      | Inventory            | Sort products by name descending         | Products appear in descending alphabetical order                   | P1       | Functional                | Yes        | Planned   |
| INV-005      | Inventory            | Sort products by price ascending         | Products appear from lowest to highest numeric price               | P1       | Functional                | Yes        | Planned   |
| INV-006      | Inventory            | Sort products by price descending        | Products appear from highest to lowest numeric price               | P1       | Functional                | Yes        | Planned   |
| INV-007      | Inventory            | Refresh inventory page                   | Page reloads without losing expected session state                 | P2       | Session                   | Later      | Planned   |
| DETAIL-001   | Product Details      | Open product from product name           | Correct product details page opens                                 | P1       | Functional                | Yes        | Planned   |
| DETAIL-002   | Product Details      | Compare inventory and detail information | Name, description, image, and price are consistent                 | P1       | Data Validation           | Yes        | Planned   |
| DETAIL-003   | Product Details      | Return to inventory                      | Back to products returns user to inventory                         | P2       | Navigation                | Yes        | Planned   |
| CART-001     | Cart                 | Add one product                          | Product is added and cart badge becomes 1                          | P0       | Smoke, Functional         | Yes        | Planned   |
| CART-002     | Cart                 | Add multiple products                    | All selected products appear and badge matches quantity            | P0       | Functional                | Yes        | Planned   |
| CART-003     | Cart                 | Remove product from inventory            | Product is removed and button and badge states update              | P1       | Functional                | Yes        | Planned   |
| CART-004     | Cart                 | Remove product from cart                 | Product disappears and badge updates                               | P1       | Functional                | Yes        | Planned   |
| CART-005     | Cart                 | Validate cart product details            | Cart product name, price, and quantity are correct                 | P1       | Data Validation           | Yes        | Planned   |
| CART-006     | Cart                 | Continue shopping from cart              | User returns to inventory without losing cart contents             | P2       | Navigation                | Yes        | Planned   |
| CART-007     | Cart                 | Persist cart through refresh             | Cart contents remain consistent after page refresh                 | P2       | Session                   | Later      | Planned   |
| CART-008     | Cart                 | Reset application state                  | Cart and application state reset as expected                       | P1       | State Management          | Yes        | Planned   |
| CHECKOUT-001 | Checkout Information | Begin checkout with product              | Customer information page opens                                    | P0       | Smoke, Functional         | Yes        | Planned   |
| CHECKOUT-002 | Checkout Information | Submit all fields empty                  | First required-field validation is displayed                       | P1       | Negative                  | Yes        | Planned   |
| CHECKOUT-003 | Checkout Information | Submit without last name                 | Last-name validation is displayed                                  | P1       | Negative                  | Yes        | Planned   |
| CHECKOUT-004 | Checkout Information | Submit without postal code               | Postal-code validation is displayed                                | P1       | Negative                  | Yes        | Planned   |
| CHECKOUT-005 | Checkout Information | Submit valid customer information        | Checkout overview page opens                                       | P0       | Functional                | Yes        | Planned   |
| CHECKOUT-006 | Checkout Information | Cancel customer information              | User returns to cart without unintended changes                    | P2       | Navigation                | Yes        | Planned   |
| OVERVIEW-001 | Checkout Overview    | Display selected products                | Overview contains the correct selected products                    | P0       | Functional                | Yes        | Planned   |
| OVERVIEW-002 | Checkout Overview    | Validate item total                      | Item total equals sum of displayed product prices                  | P0       | Calculation               | Yes        | Planned   |
| OVERVIEW-003 | Checkout Overview    | Validate final total                     | Final total equals item total plus tax                             | P0       | Calculation               | Yes        | Planned   |
| OVERVIEW-004 | Checkout Overview    | Cancel checkout overview                 | User returns to inventory as designed                              | P2       | Navigation                | Yes        | Planned   |
| ORDER-001    | Order Completion     | Complete valid order                     | Confirmation page and success message are displayed                | P0       | E2E, Smoke                | Yes        | Planned   |
| ORDER-002    | Order Completion     | Return home after completion             | User returns to inventory and order state is reset                 | P1       | E2E                       | Yes        | Planned   |
| MENU-001     | Menu                 | Open and close menu                      | Menu opens and closes correctly                                    | P2       | UI                        | Later      | Planned   |
| MENU-002     | Menu                 | Select All Items                         | User returns to inventory                                          | P2       | Navigation                | Yes        | Planned   |
| MENU-003     | Menu                 | Select Logout                            | Session ends and login page opens                                  | P0       | Smoke, Session            | Yes        | Planned   |
| MENU-004     | Menu                 | Validate About destination               | Link has the expected external destination                         | P2       | Navigation                | Manual     | Planned   |
| COMPAT-001   | Compatibility        | Run critical flow in Chromium            | Critical flow passes in Chromium                                   | P0       | Cross-browser             | Yes        | Planned   |
| COMPAT-002   | Compatibility        | Run critical flow in Firefox             | Critical flow passes in Firefox                                    | P0       | Cross-browser             | Yes        | Planned   |
| COMPAT-003   | Compatibility        | Run critical flow in WebKit              | Critical flow passes in WebKit                                     | P0       | Cross-browser             | Yes        | Planned   |

## Initial Smoke Suite

The planned smoke suite contains:

* LOGIN-001
* LOGIN-006
* INV-001
* CART-001
* CHECKOUT-001
* CHECKOUT-005
* ORDER-001
* MENU-003

## Initial Regression Scope

The initial regression scope includes:

* All login validation scenarios
* Inventory display
* All sorting options
* Product details
* Single-product and multi-product cart behaviour
* Checkout field validation
* Checkout calculations
* Order completion
* Logout and authorization
* Cross-browser critical-path execution

## Traceability Rule

Automated test titles should include or be traceable to the inventory ID.

Example:

```typescript
test('LOGIN-006: standard user can log in @smoke', async ({ page }) => {
  // Test implementation
});
```

Tags may be used for execution filtering, including:

* `@smoke`
* `@regression`
* `@negative`
* `@checkout`
* `@cross-browser`

The inventory status must be updated when a scenario is implemented, removed, deferred, or materially changed.
