#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import inquirer from 'inquirer';
import ora from 'ora';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run(projectName: string) {
  console.log(`Creating Project with ${projectName}...`);

  const projectPath = path.join(process.cwd(), projectName);

  fs.ensureDirSync(projectPath);

  const templatePath = path.join(__dirname, "template");
  if (fs.existsSync(templatePath)) {
    fs.copySync(templatePath, projectPath);
    console.log("Copying template content into project..."); // پیام به‌روزرسانی شده
  } else {
    console.error("Could not find template folder.");
    process.exit(1);
  }

  // بخش ایجاد فولدرهای خالی حذف شد

  let packageManager = 'npm';

  const answersPackageManager = await inquirer.prompt([
    {
      type: 'list',
      name: 'packageManager',
      message: 'Choose a package manager for installing dependencies:',
      choices: ['npm', 'yarn'],
    },
  ]);

  packageManager = answersPackageManager.packageManager;
  console.log(`You selected ${packageManager}.`);

  const spinner = ora('Installing dependencies...').start();

  try {
    const installCommand = packageManager === 'yarn' ? 'yarn install' : 'npm install';
    execSync(installCommand, { cwd: projectPath });
    spinner.succeed('Dependencies installed successfully.');
  } catch (error) {
    spinner.fail('Failed to install dependencies.');
    console.error('Error details:', error);
    process.exit(1);
  }

  console.log(`Project "${projectName}" created successfully!`);
  console.log(`Go to the "${projectName}" folder to start development.`);
}

program
  .version('0.0.1')
  .argument('[projectName]', 'project name (optional, will be prompted if not provided)')
  .description('Create Evotau Project')
  .action(async (projectNameArg) => {
    let projectName = projectNameArg;
    if (!projectName) {
      const answersProjectName = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'Enter project name:',
          validate: input => {
            if (!input) {
              return 'Project name is required.';
            }
            return true;
          }
        }
      ]);
      projectName = answersProjectName.projectName;
      await run(projectName); // صدا زدن تابع run با اسم پروژه دریافتی از prompt
    } else {
      await run(projectName); // صدا زدن تابع run با اسم پروژه دریافتی از آرگومان
    }
  });

program.parse(process.argv);