var isAnagram = function(string1, string2) {
    // First check if strings are same length
    if (string1.length !== string2.length) {
        return false;
    }
    
    // Create empty object to store character counts
    let charCount = {};
    
    // Count characters in first string
    for (let char of string1) {
        if (charCount[char]) {
            charCount[char] += 1 
        } else {
            charCount[char] = 1
        }
    }
    
    // Check characters in second string
    for (let char of string2) {
        // If character doesn't exist in charCount or its count is 0
        if (charCount[char] === undefined || charCount[char] === 0) {
            return false;
        }
        charCount[char] -= 1;
    }
    
    return true;
};

// Test cases
console.log("Testing 'hello' and 'olleh':", isAnagram("hello", "olleh")); // true
console.log("Testing 'hello' and 'world':", isAnagram("hello", "world")); // false
console.log("Testing 'hello' and 'helloo':", isAnagram("hello", "helloo")); // false