
export const getPoints = (purchaseAmount) => {

((Math.trunc(purchaseAmount)))

let rewardPoints1 = 0
let NewPurchaseAmount = 0;

          if((Math.trunc(purchaseAmount)) === 100) {
            (rewardPoints1 = 53);
            console.log(rewardPoints1)
          }
          else if((Math.trunc(purchaseAmount)) >= 100) {
            (NewPurchaseAmount = purchaseAmount - 100);
            (rewardPoints1 = (NewPurchaseAmount * 2) + 50);
            console.log(rewardPoints1)
          } else if ((Math.trunc(purchaseAmount)) >= 51 && (Math.trunc(purchaseAmount)) <= 100) {
              (NewPurchaseAmount = purchaseAmount - 50);
              (rewardPoints1 = NewPurchaseAmount);
              console.log(rewardPoints1)
          } 
          console.log(purchaseAmount);
          return (Math.floor(rewardPoints1));

};




// ****************************************************************************************************************************************

//T Do's
//configure function so better suited for React, I have it coded in vanilla JS
// Add in the the handling of decimals so as to only use whole numbers when calculating the RewardPoints
    //some sort of Math.trunc() situation??
//Take amount from mockData as prop to run through the RewardPoints function
//Push this data into where it wants to display this on the app (Expenses.js I think?)
