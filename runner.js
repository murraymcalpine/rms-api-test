const { exec } = require('child_process');
const path = require('path');
const reporter = require('cucumber-html-reporter');

// Generate timestamp for unique filename
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const jsonReportPath = path.join('report', `cucumber_report_${timestamp}.json`);
const htmlReportPath = path.join('report', `cucumber_report_${timestamp}.html`);

exec(`npx cucumber-js --format json:${jsonReportPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Test run failed:\n${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`⚠️ stderr:\n${stderr}`);
  }

  console.log(`✅ Test run complete:\n${stdout}`);

  const options = {
    theme: 'bootstrap',
    jsonFile: jsonReportPath,
    output: htmlReportPath,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
      "Test Environment": "Local",
      "Browser": "N/A",
      "Platform": process.platform,
      "Executed": "Node.js"
    }
  };

  reporter.generate(options);
});