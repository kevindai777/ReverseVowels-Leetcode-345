//Objective is to reverse the vowels in a string.

let s = 'leetcode'


//O(n) solution that uses two pointers from the front and back.

let temp = s.split('')
let left = 0
let right = temp.length - 1
    
//Store all vowels in a set
let set = new Set(['a','A','e','E','i','I','o','O','u','U'])
    
while (left < right) {
    //If both characters are vowels, swap them
    if (set.has(temp[left]) && set.has(temp[right])) {
        let temporary = temp[left]
        temp[left] = temp[right]
        temp[right] = temporary
    }
        
    //Move the pointer of the char/chars that isn't a vowel
    if (!set.has(temp[left]) && set.has(temp[right])) {
        left++
    } else if (set.has(temp[left]) && !set.has(temp[right])) {
        right--
    } else {
        left++
        right--
    }
}
    
return temp.join('')