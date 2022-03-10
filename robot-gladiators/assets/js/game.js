//player
var playerName = window.prompt("What is your robot's Name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//enemy
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
//check to see if the value of playerHealth variable is greater than 0
if (playerHealth > 0) {
  console.log("You're still alive!");
}
if (playerHealth === 0) {
  console.log("This will not run");
}

//  you can also log multiple values at once
console.log(playerName, playerAttack, playerHealth);

var fight = function () {
  //Alert players that Arena is ready for a fight!
  window.alert("Welcome to Robot Gladiators");
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );
  if (promptFight === "fight" || promptFight === "FIGHT") {
    //   remove enemy's health by subtracting the amount set in the playerAttack variabele.
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
    //check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enermyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining"
    );
    //checkk player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm if they really want to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes, leave fight
    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight! Goodbye!");
      //subtract money from playerMoney
      playerMoney -= 2;
    }
    //if no(false) ask question again by running fight
    else {
      fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.
};

fight();
