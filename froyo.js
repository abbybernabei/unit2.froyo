/*
A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
When they view the browser console, they observe a table listing how many of each flavor they have ordered. 
In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.
*/

// need a prompt - vanilla,vanilla,vanilla,strawberry,coffee,coffee
const froyoFlavors = prompt(
  "Please enter a comma seperated list of the froyo flavors you would like to order:"
);

// turn the list into an array
const froyoFlavorsArray = froyoFlavors.split(",");

// find the frequency of the flavors inputed
// loop through the array to count the freqency of the flavors
const freqCounter = {};
// create a for loop -- start at index 0, end at length of the array, move one
for (let i = 0; i < froyoFlavorsArray.length; i++) {
  // build the object
  const flavor = froyoFlavorsArray[i];
  //   if key is in the object
  if (flavor in freqCounter) {
    // then add 1
    freqCounter[flavor]++;
    // otherwise add flavor to the object
  } else {
    freqCounter[flavor] = 1;
  }
}
// create a table list using console.table
console.table(freqCounter);
