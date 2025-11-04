const { BeforeAll, setWorldConstructor } = require('@cucumber/cucumber');
const newman = require('newman');

const executionMap = {}; // ✅ Shared cache outside the hook

BeforeAll(async function () {
  const summary = await new Promise((resolve, reject) => {
    newman.run({
      collection: require('../../postman/api_automation_task.postman_collection.json'),
      reporters: 'cli'
    }, function (err, summary) {
      if (err) return reject(err);
      resolve(summary);
    });
  });

  for (const exec of summary.run.executions) {
    executionMap[exec.item.name] = exec;
  }
});

// Export the map so the World can access it
module.exports = { executionMap };