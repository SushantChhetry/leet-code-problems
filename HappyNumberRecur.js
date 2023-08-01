/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    if(n <= 4){
       return (n === 1);
    }

    let sum =0;

    while(n > 0){
        sum += Math.pow((n%10),2);
        n = Math.floor(n/10);
    }

    console.log(sum);

    return isHappy(sum);
};
