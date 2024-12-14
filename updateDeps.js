const fs = require('fs'); // File system module to read and write files
const { exec } = require('child_process'); // Child process module to execute shell commands

// Get dependencies from package.json file and update them to the latest version available in npm registry using npm list command and --json flag to get the output in JSON format. The --depth=0 flag is used to get only the top-level dependencies. The --include flag is used to specify the type of dependencies to include in the output. The output is parsed to get the dependencies object and then the package.json file is updated with the latest versions of the dependencies.
function getDeps(type) {
  return new Promise((resolve, reject) => {
    exec(`npm list --depth=0 --json --include=${type}`, (err, stdout, stderr) => {
      if (err || stderr) {
        reject(err);
      }
      return resolve(JSON.parse(stdout).dependencies);
    });
  });
}

// Update the dependencies in the package.json file by reading the file, parsing the content, updating the dependencies with the latest versions, and writing the updated content back to the file.
async function updateDeps() {
  try {
    const devDepsList = await getDeps('dev');
    const depsList = await getDeps('prod');
    const file = fs.readFileSync('package.json');
    const content = JSON.parse(file);

    for (let devDep in content.devDependencies) {
      content.devDependencies[devDep] = `^${devDepsList[devDep].version}`;
    }

    for (let dep in content.dependencies) {
      content.dependencies[dep] = `^${depsList[dep].version}`;
    }

    fs.writeFileSync('package.json', `${JSON.stringify(content, null, '  ')}\n`);
    console.log('Done');
  } catch (error) {
    console.error(error);
  }
}

console.log('Updating...');
updateDeps();
