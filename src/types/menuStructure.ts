export type MenuOption = {
    name: string;           // Display name of the option
    value: string;          // Key used for navigation
    helpText?: string;      // Optional help text describing the command
    action?: () => Promise<void>; // Optional function to execute when selected
  };
  
  export type Menu = {
    message: string;        // Title of the menu
    helpText?: string;      // Description of the menu
    options: MenuOption[];  // List of selectable options
  };
  
  export type MenuStructure = Record<string, Menu>;
  