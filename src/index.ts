import { handleCliArguments } from "./cli";
import { showMenu } from "./menu";
import { MenuStructure } from "./types/menuStructure";


// No-op function as a placeholder for real implementations
const noop = async () => { console.log("Not implemented yet."); };

// Define a hierarchical menu structure with help text
export const menuStructure: MenuStructure = {
  main: {
    message: "Microfrontend CLI - Manage Vite Microfrontends",
    helpText: "Main menu to manage microfrontends using Vite.",
    options: [
      { name: "Configure Microfrontend", value: "microfrontend", helpText: "Set up or manage microfrontends." },
      { name: "Manage ESLint and Code Quality", value: "eslint", helpText: "Set up linting and formatting tools." },
      { name: "Inject Code Snippets", value: "inject", helpText: "Inject WebComponent code or federation settings." },
      { name: "Check and Validate Configuration", value: "validate", helpText: "Validate microfrontend setup and dependencies." },
      { name: "Help", value: "help", helpText: "List available commands and their descriptions." },
      { name: "Exit", value: "exit", helpText: "Exit the CLI tool." },
    ],
  },
  microfrontend: {
    message: "Configure Microfrontend",
    helpText: "Options for setting up and managing microfrontends.",
    options: [
      { name: "Set up a new host", value: "setupHost", helpText: "Initialize a new microfrontend host.", action: noop },
      { name: "Set up a new remote", value: "setupRemote", helpText: "Initialize a new microfrontend remote.", action: noop },
      { name: "List existing microfrontends", value: "listMicrofrontends", helpText: "Show all registered microfrontends.", action: noop },
      { name: "Update configuration", value: "updateConfig", helpText: "Modify an existing microfrontend configuration.", action: noop },
      { name: "Remove a microfrontend", value: "removeMicrofrontend", helpText: "Delete a microfrontend from the setup.", action: noop },
      { name: "Back to main menu", value: "main" },
    ],
  },
  eslint: {
    message: "Manage ESLint and Code Quality",
    helpText: "Configure ESLint, Prettier, and other tools for code quality.",
    options: [
      { name: "Set up ESLint with recommended rules", value: "setupESLint", helpText: "Configure ESLint for the project.", action: noop },
      { name: "Configure Prettier", value: "setupPrettier", helpText: "Set up Prettier for code formatting.", action: noop },
      { name: "Apply stylelint for CSS/Sass", value: "setupStylelint", helpText: "Enable stylelint for better CSS/Sass quality.", action: noop },
      { name: "Add TypeScript configuration", value: "setupTSConfig", helpText: "Configure TypeScript settings.", action: noop },
      { name: "Back to main menu", value: "main" },
    ],
  },
  inject: {
    message: "Inject Code Snippets",
    helpText: "Inject predefined code for WebComponents, federation, and more.",
    options: [
      { name: "Inject WebComponent wrapper", value: "injectWebComponent", helpText: "Wrap code in a WebComponent.", action: noop },
      { name: "Add import maps for module federation", value: "injectImportMaps", helpText: "Configure import maps for remote modules.", action: noop },
      { name: "Configure Vite plugin federation", value: "injectViteFederation", helpText: "Set up Vite federation plugin.", action: noop },
      { name: "Generate custom entry point", value: "generateEntryPoint", helpText: "Create an entry file for the microfrontend.", action: noop },
      { name: "Back to main menu", value: "main" },
    ],
  },
  validate: {
    message: "Check and Validate Configuration",
    helpText: "Verify that your microfrontend setup is correctly configured.",
    options: [
      { name: "Validate microfrontend setup", value: "validateMicrofrontend", helpText: "Check if the microfrontend configuration is correct.", action: noop },
      { name: "Check ESLint configuration", value: "validateESLint", helpText: "Verify ESLint settings.", action: noop },
      { name: "Check TypeScript configuration", value: "validateTSConfig", helpText: "Ensure TypeScript is correctly configured.", action: noop },
      { name: "Check for dependency issues", value: "validateDependencies", helpText: "Detect missing or outdated dependencies.", action: noop },
      { name: "Back to main menu", value: "main" },
    ],
  },
  help: {
    message: "Help Menu",
    helpText: "List of all available commands with descriptions.",
    options: [
      { name: "Back to main menu", value: "main" },
    ],
  },
};

// Check if CLI arguments are passed
if (process.argv.length > 2) {
  handleCliArguments(process.argv.slice(2));
} else {
  showMenu();
}
