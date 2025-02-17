import inquirer from "inquirer";
import { MenuStructure } from "./types/menuStructure";
import { menuStructure } from ".";

export const showMenu = async (menuKey: keyof MenuStructure = "main") => {
    console.log(menuStructure);
    const menu = menuStructure[menuKey];
    console.log("Content of menuItem with key: ", menuKey);
    console.log("menu: ", menu);

    const { choice } = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: menu.message,
            choices: menu.options.map(option => option.name),
        },
    ]);

    const selectedOption = menu.options.find(option => option.name === choice);

    if (selectedOption?.value === "exit") {
        console.log("Exiting CLI...");
        process.exit(0);
    }

    if (selectedOption?.value === "help") {
        await showHelp();
    } else if (selectedOption?.action) {
        try {
            await selectedOption.action();
        } catch (error) {
            console.error(`❌ Error: ${error}`);
            console.log(`ℹ️  Help: ${selectedOption.helpText || "No description available."}`);
        }
    }

    if (selectedOption?.value !== "exit") {
        await showMenu(selectedOption?.value as keyof MenuStructure);
    }
};

// Function to dynamically navigate the help menu
export const showHelp = async (menuKey: keyof MenuStructure = "main") => {
    const menu = menuStructure[menuKey];

    if (!menu || !menu.options) {
        // If it's a leaf command, display its help text
        console.log(`\nℹ️  Help for: ${menuKey}`);
        console.log(menuStructure[menuKey]?.helpText || "No description available.");
        console.log("\n");
        return;
    }

    // Fetch all available subcommands
    const choices = menu.options.map(option => ({
        name: `${option.name} - ${option.helpText || "No description available."}`,
        value: option.value,
    }));

    // Add a back option if not in the main menu
    if (menuKey !== "main") {
        choices.push({ name: "⬅️  Back to previous menu", value: "main" });
    }

    // Add an exit option
    choices.push({ name: "🚪 Exit Help", value: "exit" });

    // Prompt user to select a command
    const { selectedCommand } = await inquirer.prompt([
        {
            type: "list",
            name: "selectedCommand",
            message: `Help: ${menu.message}\nSelect a command to see details:`,
            choices,
        },
    ]);

    if (selectedCommand === "exit") {
        console.log("Exiting CLI...");
        process.exit(0);
    }

    if (selectedCommand === "main") {
        await showHelp("main");
    } else {
        await showHelp(selectedCommand as keyof MenuStructure);
    }
};
