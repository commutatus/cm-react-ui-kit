# EXPA Design System

Welcome to the EXPA Design System brought to you by Commutatus UX.

## Getting started

This project utilizes Storybook for component development. If you would like to know more about Storybook or how it works, check out [their website](https://storybook.js.org/).

## **Project Installation & Setup:**

Clone the repository down locally.
cd into the project and run npm install to install all project dependencies.

### Running the Development Environment:

The Storybook development environment can be started by running `npm start`

Whenever you add, remove, or alter a component's css annotation metadata, you'll need to restart Storybook to see those changes.

### Configuring Node and NVM

Node v12 is recommended for use with the Design System repository, and [NVM](http://nvm.sh/) is the recommended choice for managing multiple versions of Node on your computer.

A .nvmrc file is included in this project to aid in local development. To utilize it for setting your project's node version, run `nvm use` in the root of the directory.
Additionally, you can set up a deeper shell integration for automatically invoking the nvmrc file when you change into the project directory by
[following these instructions](https://github.com/nvm-sh/nvm#deeper-shell-integration).

## Developing in Storybook

Once the development server is started with `npm start`, you can load it at [http://localhost:6006](http://localhost:6006/).

## Tasks

### `npm start`

Starts the Storybook server for local development.

### Tests

`npm test`: run all tests

## Got Feedback?

Please open a new [GitHub Issue](https://github.com/commutatus/cm-react-ui-kit/issues).
