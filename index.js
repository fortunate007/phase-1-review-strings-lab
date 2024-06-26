// Define currentUser variable
const currentUser = 'Grace Hopper';

// Define welcomeMessage variable using template literal
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define excitedWelcomeMessage variable by converting welcomeMessage to uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define shortGreeting variable to include a shortened greeting with the first initial of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
