/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    } 
    //create a map
    let map = new Map();
    //loop through s char and store it as a key

    for(let i = 0 ; i < s.length ; i++){
        let sChar = s.charAt(i);

        if(map.has(sChar)){
            map.set(sChar, map.get(sChar) + 1);
        }
        else{
            map.set(sChar, 1);
        }
    }

    for(let j = 0 ; j < t.length ; j++){
        let tChar = t.charAt(j);

        if(map.has(tChar)){
            map.set(tChar, map.get(tChar) - 1);
            if(map.get(tChar) < 0){
                return false;
            }
        }
        else{
            return false;
        }
    }

    return true
};
