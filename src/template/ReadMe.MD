# Evotau

[![Build Status](https://travis-ci.com/evotau/evotau.svg?branch=main)](https://travis-ci.com/evotau/evotau)
[![npm version](https://badge.fury.io/js/@evotau/core.svg)](https://www.npmjs.com/package/@evotau/evotau)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Evotau is a powerful and complete backend framework built with Node.js, designed for creating robust and scalable web applications.  It empowers developers to build both monolithic and microservice architectures with ease.  Evotau handles the complexities of HTTP requests, file uploads, filesystem interactions, schema validation, template engine integration, SQL ORM, authentication, and testing, providing a comprehensive toolkit for modern backend development.

## Features

- **Complete Framework:**  Evotau provides a full suite of tools and features for building your entire backend application.
- **Modular Design (using Lerna):** While a complete framework, Evotau utilizes Lerna to manage internal modules, promoting organization and maintainability for its own development.  This modularity does *not* require users of the framework to install separate packages.
- **HTTP Layer:** Powerful and flexible HTTP request handling.
- **File Uploads:** Easy and secure file upload management.
- **Filesystem Drive:** Seamless interaction with the filesystem.
- **Schema Validator:** Robust data validation for reliable applications.
- **Template Engine:** Integrate your favorite template engine for dynamic content generation.
- **SQL ORM:** Simplify database interactions with a powerful ORM.
- **Authentication Layer:** Secure user authentication and authorization.
- **Testing:** Comprehensive testing tools to ensure code quality.

## Development

This project is developed by Hadi Mousavi ([codeindevelopment@gmail.com](mailto:codeindevelopment@gmail.com) or [ceo@aqupila.com](mailto:ceo@aqupila.com)) with hundreds of hours of dedicated work. It is open-sourced under the MIT license, allowing developers worldwide to contribute and extend its capabilities.

Any new feature or idea added to the project, whether by you or any other contributor, will be acknowledged and attributed to the individual who contributed it.

We encourage you to contribute to Evotau! If you have a new feature idea, feel free to clone the repository, add your feature, and submit a pull request. Your contribution will be reviewed, and if approved, it will be merged into the project, and you will be credited for your contribution.

## Getting Started

Evotau provides a streamlined setup process to get your project up and running quickly.

### Installation

```bash
npx evotau setup <project-name>  # or yarn create evotau <project-name>
```
<br>
During the setup process, you will be prompted to choose a directory for your new project.  Evotau will then initialize the project with all the necessary files and templates.

### Running the development server

``` bash
cd <project-name>
npm run dev # or yarn dev
```
This will start the development server on port 8000.

## Evotau CLI

Evotau comes with a powerful CLI that makes it easy to perform various tasks with simple commands.  This CLI is designed to streamline your development workflow and boost productivity.

### Available Commands

Here's a quick overview of some essential commands. For a complete list and detailed explanations, please refer to the documentation at [https://evotau.com/docs](https://evotau.com/docs).
<br></br>
*   `evo create:controller <controller-name>`: Creates a new controller.  Replace `<controller-name>` with the desired name for your controller.  For example: `evo create:controller user`.
<br></br>
*   `evo create:model <model-name>`: Creates a new model.  Replace `<model-name>` with the desired name for your model.  For example: `evo create:model product`.
<br></br>
*   `evo create:middleware <middleware-name>`: Creates a new middleware. Replace `<middleware-name>` with the desired name for your middleware. For example: `evo create:middleware auth`.
<br></br>
*   `evo generate:migration <migration-name>`: Generates a new database migration file. Replace `<migration-name>` with a descriptive name for the migration. For example: `evo generate:migration add_users_table`.

*   `evo migrate`: Runs all pending database migrations.

*   `evo seed`: Seeds the database with initial data.

*   `evo --help`: Displays help information for the Evotau CLI, including available commands and options.

*   `evo version`: Displays the current version of the Evotau CLI.


#### Example Usage
To create a user controller, you would run:
```bash
evo create:controller user
```


This would generate the necessary files for a user controller in the appropriate directory.  You can then customize the controller logic as needed.

We highly recommend consulting the official Evotau documentation for the most up-to-date information and detailed usage examples for all CLI commands.

### License
MIT
<br></br>
Key changes:

*   The description now emphasizes that Evotau is a *complete* framework.
*   The "modular design" explanation clarifies that it's for Evotau's internal organization, not for users.
*   The installation instructions now use `npx evotau setup` or `yarn create evotau`.
*   The core module information is removed, as it's now a single repository.
*   The rest of the README (CLI commands, etc.) remains the same, ensuring consistency.

This revised README should accurately reflect the nature of your project and provide clear instructions for users. Remember to update the npm badge and repository URL as needed.

