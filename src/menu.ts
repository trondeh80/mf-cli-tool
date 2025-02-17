import inquirer from "inquirer";
import { MenuStructure } from "./types/menuStructure.js";
import { menuStructure } from "./index.js";

export const showMenu = async (menuKey: keyof MenuStructure = "main") => {
  const menu = menuStructure[menuKey];

  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: menu.message,
      choices: menu.options.map((option) => option.name),
    },
  ]);

  const selectedOption = menu.options.find((option) => option.name === choice);

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
      console.log(
        `ℹ️  Help: ${selectedOption.helpText || "No description available."}`
      );
    }
  }

  if (selectedOption?.value !== "exit") {
    await showMenu(selectedOption?.value as keyof MenuStructure);
  }
};

// Function to dynamically navigate the help menu
export const showHelp = async (menuKey: keyof MenuStructure = "help") => {
  const isHelp = menuKey === "help";
  const menu = menuStructure[isHelp ? "main" : menuKey];

  if (!menu || !menu.options) {
    // If it's a leaf command, display its help text
    console.log(`\nℹ️  Help for: ${menuKey}`);
    console.log(
      menuStructure[menuKey]?.helpText || "No description available."
    );
    console.log("\n");
    return;
  }

  // Fetch all available subcommands
  const choices = menu.options.map((option) => ({
    name: `${option.name} - ${option.helpText || "No description available."}`,
    value: option.value,
  }));

  // Add an exit option
  if (isHelp) {
    choices.push({ name: "🚪 Exit Help", value: "main" });
  }

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
    console.log("Avslutter");
    process.exit(0);
  }

  if (selectedCommand === "main") {
    await showMenu();
  } else {
    await showHelp(selectedCommand as keyof MenuStructure);
  }
};
