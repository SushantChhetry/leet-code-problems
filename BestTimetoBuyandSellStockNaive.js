/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let maxProfit = 0;
   let minPrice = prices[0];
   

   for(let i = 0 ; i < prices.length ; i++){
       if(prices[i] < minPrice){
           minPrice = prices[i];
       }

       let temp = prices[i] - minPrice;

       if(temp > maxProfit){
           maxProfit = temp;
       }
   }
    return maxProfit;
};
