//NOTE: THIS IS NAIVE BECAUSE WE CAN EITHER USE THE MAP OBJECT TO DO THIS INSTEAD OF A NORMAL OBJECT

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {}; //hashmap

    for(let i = 0 ; i < magazine.length ;i ++){

        if(magazine.charAt(i) in map){
            map[magazine.charAt(i)] = map[magazine.charAt(i)] + 1;
        }
        else{
            map[magazine.charAt(i)] = 1;
        }
    }

    for(let j = 0 ; j < ransomNote.length; j++){
        if(!(ransomNote.charAt(j) in map))
        {
            return false;
        }
        else{
            map[ransomNote.charAt(j)] =  map[ransomNote.charAt(j)]-1;

            if( map[ransomNote.charAt(j)] < 0){
                return false;
            }
        }
    }



    return true;
};
