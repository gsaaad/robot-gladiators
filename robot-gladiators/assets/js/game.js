//player
var playerName = window.prompt("What is your robot's Name? ");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//enemy

var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

//check to see if the value of playerHealth variable is greater than 0
if (playerHealth > 0) {
  console.log("You're still alive!");
}
if (playerHealth === 0) {
  console.log("Your bot is dead! add some oil maybe");
}

//  you can also log multiple values at once
console.log(playerName, playerAttack, playerHealth);

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } // end of while loop
}; // end of fight function

//initiate a function called startGame for the for loop!
var startGame = function () {
  //reset stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  debugger;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      //let player know what round it is [remember! arrays start at index 0. so add]
      window.alert("Welcome to Robot Gladiators Round " + (i + 1));
      //pick new enemy to fight based on index
      var pickedEnemy = enemyNames[i];
      //reset enemy health before starting a new fight
      enemyHealth = 50;
      // use debugger to pause script from running to check out what's going on
      //debugger;
      // pass the picked enemy name to
      fight(pickedEnemy);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  //after the loop ends, player is either out of health or enemies to fight!
  endGame();
};
var endGame = function () {
  //if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("the game has now ended. Let's see how you did!");
  } else {
    window.alert("You've lost your robot in battle!");
  }
  //ask player if they wanna play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    //restart game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon");
  }
};
startGame();
