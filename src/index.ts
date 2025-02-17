import { handleCliArguments } from "./cli.js";
import { showMenu } from "./menu.js";
import { MenuStructure, MenuOption } from "./types/menuStructure.js";

// No-op function as a placeholder for real implementations
const noop = async () => { console.log("Not implemented yet."); };

// Define a hierarchical menu structure (excluding "main")
export const menuStructure: MenuStructure = {
    microfrontend: {
        message: "Configure Microfrontend",
        helpText: "Options for setting up and managing microfrontends.",
        options: [
            { name: "Set up a new host", value: "setupHost", helpText: "Initialize a new microfrontend host.", action: noop },
            { name: "Set up a new remote", value: "setupRemote", helpText: "Initialize a new microfrontend remote.", action: noop },
            { name: "List existing microfrontends", value: "listMicrofrontends", helpText: "Show all registered microfrontends.", action: noop },
            { name: "Update configuration", value: "updateConfig", helpText: "Modify an existing microfrontend configuration.", action: noop },
            { name: "Remove a microfrontend", value: "removeMicrofrontend", helpText: "Delete a microfrontend from the setup.", action: noop },
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
        ],
    },
};

// Dynamically generate the main menu
export const mainMenu = {
    message: "Microfrontend CLI - Manage Vite Microfrontends",
    helpText: "Main menu to manage microfrontends using Vite.",
    options: [
        ...Object.keys(menuStructure).map((key) => ({
            name: menuStructure[key as keyof MenuStructure].message,
            value: key,
            helpText: menuStructure[key as keyof MenuStructure].helpText,
        })),
        { name: "Help", value: "help", helpText: "List available commands and their descriptions." },
        { name: "Exit", value: "exit", helpText: "Exit the CLI tool." },
    ] as MenuOption[],
};

// Add "Back to Main Menu" option to all submenus
Object.keys(menuStructure).forEach((key) => {
    menuStructure[key as keyof MenuStructure].options.push(
        { name: "⬅️ Back to Main Menu", value: "main" }
    );
});

// Add main menu to the structure
menuStructure.main = mainMenu;

// Check if CLI arguments are passed
if (process.argv.length > 2) {
    handleCliArguments(process.argv.slice(2));
} else {
    showMenu();
}
