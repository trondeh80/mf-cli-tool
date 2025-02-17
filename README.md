# Microfrontend CLI Tool

A TypeScript-based Command Line Interface (CLI) tool designed to streamline the management of microfrontend configurations for development teams. This tool supports setting up microfrontend hosts and remotes, managing code quality tools (ESLint, Prettier, etc.), injecting code snippets, and validating configurations.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Interactive Mode](#interactive-mode)
  - [Command-Line Arguments](#command-line-arguments)
- [Menu Structure](#menu-structure)
  - [Main Menu](#main-menu)
  - [Microfrontend Menu](#microfrontend-menu)
  - [ESLint and Code Quality Menu](#eslint-and-code-quality-menu)
  - [Inject Code Snippets Menu](#inject-code-snippets-menu)
  - [Validate Configuration Menu](#validate-configuration-menu)
  - [Help Menu](#help-menu)
- [Development](#development)
  - [Project Structure](#project-structure)
  - [Adding New Features](#adding-new-features)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Microfrontend Management**: Set up, list, update, and remove microfrontend hosts and remotes.
- **Code Quality Tools**: Configure ESLint, Prettier, Stylelint, and TypeScript for consistent code quality.
- **Code Injection**: Inject predefined code snippets for WebComponents, module federation, and Vite plugins.
- **Configuration Validation**: Validate microfrontend setups, ESLint, TypeScript configurations, and dependencies.
- **Interactive CLI**: User-friendly menu-based navigation for ease of use.
- **Command-Line Support**: Run commands directly via arguments for automation and scripting.

---

## Prerequisites

Before using this CLI tool, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **TypeScript** (v5.7 or higher, if developing or extending the tool)
- A modern terminal (e.g., Bash, Zsh, or Windows Command Prompt)

---

## Installation

1. Clone the repository to your local machine:

2. Install dependencies
   ```npm i```

3. Build the tool
   ```npm run build```

4. Run the tool
  ```node/dist/index.js```