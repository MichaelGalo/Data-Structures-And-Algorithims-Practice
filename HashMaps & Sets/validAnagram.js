let string1 = "boolean"
let string2 = "string"

let string3 = "cheater"
let string4 = "teacher"

var isAnagram = function(string1, string2) {
    // we need first to check to see if the string lengths are equal, otherwise return false 
    if (string1.length !== string2.length) {
        return false
    }

    // we'll next need to create a hashMap
    hashMap = {}

    // loop through string grabbing each character & making a count in the hash map. The character will be the key and the count will be the value
    for (let i = 0; i < string1.length; i++) {
        // if char[i] exists in the hashMap, we want to increase count by 1
        // otherwise we want to add the char[i] as the key and the value 1 
    }

    // loop again through the second string, doing the same thing

    // if the counts & characters are equal, then they are anagrams (might need to use a sort method)

    // return false as default until meeting true conditions
    console.log("Hello World")
};

isAnagram(string1, string2)