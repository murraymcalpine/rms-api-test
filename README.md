# Purpose: 
This test suite covers Part One of the Senior Tester Take Home Test: 

"Using the public API below we will like you to demonstrate your ability to write test
automation code in a language of your choice. The scenarios to automate are
described in the API section below."

## Prerequisites

To run the tests locally, you'll need:

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Git (to clone the repository)

---

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/murraymcalpine/rms-api-test.git
   ```

2. **Navigate to the directory**
   ```bash
   cd rms-api-test
   ```

3. **Install the dependencies**
   ```bash
   npm install
   ```

4. **Install Cucumber HTML Reporter**
   ```bash
   npm install --save-dev cucumber-html-reporter
   ```

5. **Run the Tests**
   ```bash
   node runner.js
   ```   


### HTML Run Report
   On Completion of the test run a HTML Run Report will be generated and opened in a browser window. 
   The report will be saved to:
   ```bash
   report/cucumber_report.html
   ```
   

### Notes

-  The Postman collection is executed once per test run via a BeforeAll hook
-  Each scenario references a named request result using executionMap
-  Feature files are written in Gherkin for clarity and modularity
