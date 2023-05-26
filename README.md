# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game application built with React. The game allows players to choose their weapon (rock, paper, or scissors) and compete against a computer opponent. The application keeps track of the player's score and displays the game result.

## Installation
Follow the steps below to run the application on your local machine:

1. Clone the repository to your local machine or download the source code as a ZIP file and extract it.
2. Open a terminal and navigate to the project's root directory.
3. Install the dependencies by running the following command:


### `yarn install`

## Running the Application

Once the dependencies are installed, start the development server by running the following command:
### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Gameplay
1. When you open the application, an authentication modal will appear. Enter your name and click "Save" to proceed. This step is optional, and you can close the modal without entering a name.

2. The game area consists of the player panel, game board, opponent panel, result panel, score area, and leaderboard.

3. Player Panel:
- Choose your weapon by clicking on one of the available options (rock, paper, or scissors). You can only select a weapon when the game is in progress and you haven't chosen a weapon before.
- The weapon selection will be disabled if the game is not in progress or you have already chosen a weapon.

4. Game Board:
- During an ongoing game, a countdown will be displayed for a few seconds.
- When the countdown ends, the game result will be shown.

5. Opponent Panel:
- Displays the weapon chosen by the computer opponent.
- The opponent panel will only show the weapon when the game has ended.

6. Result Panel:
- Shows the result of the game (e.g., "You Win!", "You Lose!", "It's a Tie!").
- Click the "Play Again" button to start a new game.

7. Score Area:
- Displays the player's name and their current score.

8. Leaderboard:
- Shows the leaderboard with the top players and their scores.

## Changing Rules and Adding New Weapons
To change the game rules or add new weapons, you can modify the constants/index.ts file.

WEAPONS: This array contains the available weapons in the game. You can add or remove weapons by modifying this array.
RULES: This 2-dimensional array represents the rules of the game. Each inner array corresponds to a weapon and defines the winning conditions against other weapons. The index of each inner array represents the player's weapon, and the values inside the array represent the outcome against other weapons. Modify this array to define new rules or change the existing ones.

Example:
If you want to add a new weapon called "Lizard" and define the rules for it, you would make the following changes in constants/index.ts:

## Usage/Examples

```javascript
// Add "Lizard" to the WEAPONS array
export const WEAPONS: = [
  'rock',
  'paper',
  'scissors',
  'lizard',
];

// Update the RULES array to include rules for "Lizard"
export const RULES: = [
  [0, 2, 1, 1],    // rock wins against scissors and lizard, scissors wins against paper, lizard wins against paper
  [1, 0, 2, 2],    // paper wins against rock and lizard, rock wins against scissors, lizard wins against paper
  [2, 1, 0, 2],    // scissors wins against paper and lizard, paper wins against rock, lizard wins against rock
  [2, 1, 2, 0],    // lizard wins against paper and rock, paper wins against scissors, rock wins against scissors
];
```
Save the changes, and the game will now include the new weapon "Lizard" with the corresponding rules.
Feel free to customize the game rules and weapons according to your preferences.

## Enjoy playing the game!

