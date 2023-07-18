/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let p1 = 0, p2 = 0;

    while(p2 < t.length){
        if(t.charAt(p2) === s.charAt(p1)){
            p1++;
            p2++;
        }
        else{
            p2++;
        }
    }

    if(p1++ !== s.length){
        return false;
    }

    return true;
};
