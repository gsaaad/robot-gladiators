//player
var playerName = window.prompt("What is your robot's Name? ");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 20;
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
      //if we're not at the last enemy in the array AND we're not at the last enemy in the array
      if (i < enemyNames.length - 1 && i < enemyNames.length - 1) {
        //ask if player wants to use the store before next round
        var storeConfirm = window.confirm(
          "The fight is over, Would you like to visit the store before the next round?"
        );
        //if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
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
var shop = function () {
  debugger;
  //ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice"
  );
  //use Switch to carry out action
  // ? using Switch (and 3 if statements).
  // ? switch is less code and  more utilized when only 1 variable may be multiple values... SWITCH!
  switch (shopOptionPrompt) {
    case "REFILL": //newcase\
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars. >:D");
        //increase health and decrease money

        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
        window.alert(
          "You can spend $10 more and ROLL a number (0-99) for extra Health!"
        );
        var luckyConfirmHealth = window.confirm(
          "Are you feeling..... Lucky..?"
        );
        console.log(luckyConfirmHealth);
        if (luckyConfirmHealth && playerMoney > 5) {
          var luckyRollHealth = Math.floor(Math.random() * 100);
          window.alert(
            "Your robot gained..... " + luckyRollHealth + " HEALTH Boost!"
          );
          console.log(luckyRollHealth);
          playerHealth += luckyRollHealth;
          window.alert("Your robot has " + playerHealth + " Total HP");
          console.log(playerHealth);
          playerMoney -= 5;
          console.log(playerMoney);
          window.alert(
            "Continue onwards... TO BATTLE! BUZZ BUZZZ BUZZZZ SKT CRK"
          );
        } else {
          window.alert(
            "Continue onwards... TO BATTLE! BUZZ BUZZZ BUZZZZ SKT CRK"
          );
        }
      } else {
        window.alert("You don't have enough money!");
      }

      break;
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert(
          "Upgrading player's attack by 6, will cost you $7 Dollars. >:D"
        );

        //increase attack and decrease money

        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
        console.log(playerAttack, playerMoney);
        window.alert(
          "You can spend $5 more and ROLL a number (0-9) for extra ATTACK!"
        );
        var luckyConfirmAtt = window.confirm("Are you feeling..... Lucky..?");
        if (luckyConfirmAtt && playerMoney > 5) {
          var luckyRollAtt = Math.floor(Math.random() * 10);
          window.alert(
            "Your robot gained..... " + luckyRollAtt + " Attack Boost!"
          );
          console.log(luckyRollAtt);
          playerAttack += luckyRollAtt;
          window.alert(
            "Your robot has " + playerAttack + " total ATTACK POWER"
          );
          console.log(playerAttack);
          playerMoney -= 5;
          console.log(playerMoney);
          window.alert(
            "Continue onwards... TO BATTLE! BUZZ BUZZZ BUZZZZ SKT CRK"
          );
        } else {
          window.alert(
            "Continue onwards... TO BATTLE! BUZZ BUZZZ BUZZZZ SKT CRK"
          );
        }
      } else {
        window.alert("You don't have enough money!");
      }

      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store");
      window.alert("Continue onwards... TO BATTLE! BUZZ BUZZZ BUZZZZ SKT CRK");

      //do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again");

      //call shop() again to force player to pick a valid option!
      shop();
      break;
  }
};

startGame();
