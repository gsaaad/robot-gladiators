//player
var playerName = window.prompt("What is your robot's Name");
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
  } // end of while loop
}; // end of fight function

// fight();

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
