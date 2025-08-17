# reactShopCartPlayWrightJS

PlayWright test suite on basic shopping cart web app functionality (various product addition to / removal from shopping cart) The test suite captures screenshots at the end of test case run (for logging purposes). The PlayWright also generates HTML reports at the end of each test run (to limit test suite run for a single test only, add after describe or test keyword "only" (ex. test.only / test.describe.only))

#Tech Requirements:
 
 1.Node.js (20.x and above)

 2.PlayWright 1.54 or above
 
 3.IntelliJ IDEA (or another IDE)
    
 4. ESLint 9.x

#Setup

1. Clone this repository into IntelliJ (or other IDE) workspace folder (or wherever the project can be launched by the IDE).
2. Open the IDE and open the project folder.
3. Install Node.js.
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure PlayWright (enter in IDE terminal: npm init playwright@latest).
6. Install ESLint with cmd in IDE terminal: npm install --save-dev eslint eslint-plugin-playwright globals
7. Run the test suite (in-terminal) on the IDE with npx playwright test (to run ESLint input in the terminal: npm run lint, for auto-fix issues: npm run lint:fix)

## Test Case List

//Single Product Addition To Shopping Cart Test

1.	// Test 001 -> add single homepage product ("Sessel Sofie") to shopping cart test

//Multiple Products Addition To Shopping Cart Test

1.	// Test 001a -> add multiple homepage products ("Sessel Little", "Schlafsessel Rovigo", "Sessel Anna", "Ohrensessel Josslyn") to shopping cart test

//Product(s) Removal From Shopping Cart Tests

1.	// Test 001b -> remove single homepage product ("Sessel Sofie") from shopping cart test
2.	// Test 001c -> remove multiple homepage products ("Sessel Little", "Schlafsessel Rovigo") from shopping cart test
