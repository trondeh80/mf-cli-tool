import { menuStructure } from "./index.js";
import { MenuStructure } from "./types/menuStructure.js";

export const handleCliArguments = async (args: string[]) => {
    let currentMenu: keyof MenuStructure = "main";

    for (const arg of args) {
        const menu = menuStructure[currentMenu];

        if (!menu || !menu.options) {
            console.error(`❌ Error: Invalid command "${arg}"`);
            console.log(`ℹ️  Help: ${menuStructure[currentMenu]?.helpText || "No description available."}`);
            process.exit(1);
        }

        const nextOption = menu.options.find(option => option.value === arg);

        if (!nextOption) {
            console.error(`❌ Error: Command "${arg}" not found in "${currentMenu}".`);
            console.log(`ℹ️  Available options: ${menu.options.map(o => o.value).join(", ")}`);
            process.exit(1);
        }

        if (nextOption.action) {
            try {
                await nextOption.action();
            } catch (error) {
                console.error(`❌ Error: ${JSON.stringify(error)}`);
                console.log(`ℹ️  Help: ${nextOption.helpText || "No description available."}`);
                process.exit(1);
            }
            process.exit(0);
        } else {
            currentMenu = nextOption.value as keyof MenuStructure;
        }
    }

    console.log(`❌ Error: Command path incomplete.`);
    console.log(`ℹ️  Available options: ${menuStructure[currentMenu].options.map(o => o.value).join(", ")}`);
    process.exit(1);
};
