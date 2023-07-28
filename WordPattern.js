/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    let words = s.split(' ');
    let map1 = new Map();
    let map2 = new Map();
    
    if(pattern.length !== words.length){
        return false;
    }


    for(let i = 0 ; i < pattern.length;i++){
        let charP = pattern.charAt(i);

        if(!map1.has(charP)){
            map1.set(charP, words[i]);
            if(!map2.has(words[i])){
                map2.set(words[i], charP);
            }
            else{
                if(map2.get(words[i]) !== charP){
                    return false;
                }
            }
        }
        else{
            if(map1.get(charP) !== words[i]){
                return false;
            }
        }
    }
    return true;
    
};
