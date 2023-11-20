General info

This code guides you through taking your first step into automation. You can read this file [firstStep.pptx](firstStep.pptx)

Step one:
1. Open the file [test_first_step.js](test_first_step.js) - this code is for the Chrome browser.
2. Open a Chrome browser on your computer and go to the page https://www.wikipedia.org/.
3. Open the dev tools and run the code in the console - you will see how the search field is filled in and the Search button is clicked.

Step two:

1. Install NodeJS.
2. Run npm install. This will install engines for communicating between your computer and the web browser:
   * selenium-webdriver
   * or puppeteer
   * or playwright
3. Run: node test_second_step_selenium.js
   * or run: node test_second_step_puppeteer.js
   * or run: node test_second_step_playwright.js
4. If you open the files, you'll see that the same code that was executed in the browser console is now being run on your computer.
5. Inside the files, there's a link to the running engine (selenium-webdriver, puppeteer, playwright).


Step three:
1. Now we can organize our test_fourStepTest cases. To do this, refer to the file [test_fourStepTest](test_fourStepTest)->[test_third_step.test_four.step.test.js](test_fourStepTest%2Ftest_third_step.test_fourStepTest.js).
2. To run it, use the command "npx playwright test".


Step four:
1. Utilize the PageObject architecture in the [Page](Page) folder to organize pages.
2. [test_four.step.test.js](test%2Ftest_four.step.test.js) - this file.
3. Run the test_fourStepTest with the command "npx playwright test".


run
```
npm install
```

or run
```
npm i -D selenium-webdriver
npm i -D puppeteer
npm i -D playwright
npm i -D @playwright/test
```

run with node:
```
node test_second_step_selenium.js
node test_second_step_puppeteer.js
node test_second_step_playwright.js
```

run with playwright runner:
```
npx playwright test
```
