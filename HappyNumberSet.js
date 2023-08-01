/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let numberSeen = new Set(); //using to detect cycle

    while(n !==  1 & !numberSeen.has(n)){

        numberSeen.add(n);

        let sum =0;

    while(n > 0){
        let digit = (n%10);
        sum += digit * digit; //Not using Math.pow for performance reasons
        n = Math.floor(n/10);
    }

    n= sum;
    }

    return n === 1;
};
