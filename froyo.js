const userInputString = prompt(
    "Please enter some Froyo order numbers separated by commas, below are examples",
    "Vanilla,Chocolate,Mint,Strawberry,Lemon,Coffee"
  );
  
  const froyoArray = userInputString.split(",");
  const froyoObject={}
function getLength(froyoArray) {
  return froyoArray.length
}

function logFlavors() {
  for (let i = 0; i < froyoArray.length; i++) {
  console.log(froyoArray [i]); 
  if (froyoObject[froyoArray [i]]!==undefined) {
    froyoObject[froyoArray [i]]= froyoObject[froyoArray [i]]+1
  } else {
    froyoObject[froyoArray [i]]= 1
  }
  }
  
}
logFlavors ()
console.log (froyoObject)

