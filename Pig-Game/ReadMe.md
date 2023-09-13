# Pig Game

Pig Game is a simple two-player dice game implemented using HTML, CSS, and JavaScript. Players take turns rolling a dice and accumulate points based on the dice rolls. The goal is to reach a certain score (in this case, 100) to win the game.

## How to Play

1. Open the `index.html` file in your web browser.
2. The game starts with Player 1 (Player 1 is the active player initially).
3. Click the "Roll dice" button to roll the dice. The number rolled on the dice will be displayed.
4. If you roll a 1, your current score will be reset to 0, and it will be the next player's turn.
5. If you roll any other number, that number will be added to your current score.
6. To hold your current score and add it to your total score, click the "Hold" button.
7. The first player to reach a total score of 100 or more wins the game.
8. You can start a new game at any time by clicking the "New game" button.

## Code Structure

The code is organized into HTML, CSS, and JavaScript files:

- `index.html`: This is the main HTML file that defines the structure of the game. It contains the player sections, buttons, and dice image.

- `style.css`: The CSS file contains the styling for the game, including layout, colors, fonts, and button animations.

- `script.js`: The JavaScript file contains the game logic. It handles rolling the dice, updating scores, switching players, and determining the winner.

## How the Game Works

1. The game starts by initializing the scores, current scores, active player, and game state.

2. Clicking the "Roll dice" button generates a random number between 1 and 6 (simulating a dice roll). The dice image updates to display the rolled number.

3. If the rolled number is not 1, it's added to the current player's current score. If it is 1, the current score resets to 0, and the turn switches to the other player.

4. Clicking the "Hold" button adds the current score to the player's total score. If a player's total score reaches 100 or more, they win the game.

5. The game tracks the active player, updates scores, and provides a visual indication of the active player.

6. You can start a new game at any time by clicking the "New game" button, which resets all scores and settings.

## Contributors

[Devakinandan23](https://github.com/Devakinandan23)

## Enjoy the Game!

Have fun playing Pig Game! Test your luck and strategy against a friend, and aim to be the first to reach 100 points.
