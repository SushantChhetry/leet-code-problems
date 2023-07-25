/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {   
    
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s.charAt(i);
        const charT = t.charAt(i);

        if (map.has(charS)) {
            if (map.get(charS) !== charT) {
                return false;
            }
        } else {
            // Check if the character in `t` is already mapped to another character in `s`
            if (Array.from(map.values()).includes(charT)) {
                return false;
            }
            map.set(charS, charT);
        }
    }

    return true;
};
