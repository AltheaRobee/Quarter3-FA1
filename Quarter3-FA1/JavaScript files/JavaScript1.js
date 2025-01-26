let nickname = "Allie";
let heightInInches = 50; 
let weightInKg = 45; 

function displayInfo() 
{
  let heightFeet = Math.floor(heightInInches / 12);
  let heightRemainingInches = heightInInches % 12;

  let weightInLbs = (weightInKg * 2.20462).toFixed(3);

    alert
  (
    "Name: " + nickname + "\n" +
    "Height: " + heightFeet + "’" + heightRemainingInches + "”\n" +
    "Weight: " + weightInLbs + " lbs"
  );
}