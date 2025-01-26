let nickname = "Allie";
let heightInInches = 50; 
let weightInKg = 45; 

function askConsent() 
{
  let consent = confirm("Do you agree to share your personal information with this site?");

  if (consent) 
  {
    let heightFeet = Math.floor(heightInInches / 12);
    let heightRemainingInches = heightInInches % 12;

    let weightInLbs = (weightInKg * 2.20462).toFixed(3);

    console.log
    (
      "Name: " + nickname + "\n" +
      "Height: " + heightFeet + "’" + heightRemainingInches + "”\n" +
      "Weight: " + weightInLbs + " lbs"
    );

  } 
  else 
  {    
   console.log("User does not wish to share his/her information.");
  }
}