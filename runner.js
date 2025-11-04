const { exec } = require('child_process');
const reporter = require('cucumber-html-reporter');

exec('npx cucumber-js --format json:report/cucumber_report.json', (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Test run failed:\n${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`⚠️ stderr:\n${stderr}`);
  }

  console.log(`✅ Test run complete:\n${stdout}`);

  // Generate HTML report
  const options = {
    theme: 'bootstrap',
    jsonFile: 'report/cucumber_report.json',
    output: 'report/cucumber_report.html',
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