/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newS = s.replace(/[^0-9a-z]/gi,"").toLowerCase();
    let left = 0, right = newS.length - 1;
    while(left <= right){
        if(newS.charAt(left) !== newS.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
};
