/* isPallindrome(string) returns true or false. If true, the string is a pallindrome. If false, the string is not a pallindrome */
/*A pallindrome is a word, phrase, number, or sequence of words that reads the same backwards as forwards */
var assert = require('assert');
function isPallindrome(s) {
    s = s.replace(/[.,/?#!$%^&@*;:{}=_`~()]/g, "").replace(/ /g, '').toLowerCase();
    for (var i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1])
            return false;
    }
    return true;
}
module.exports = isPallindrome;
/*
assert(isPallindrome("abba"));
assert(!isPallindrome("abca"));
assert(isPallindrome(""));
assert(isPallindrome("evil olive"))
assert(isPallindrome("I did, did I?"))
assert(isPallindrome("Draw, O coward!"))
assert(isPallindrome("12321"))
assert(isPallindrome("    "))
assert(isPallindrome("$%^&*   ;:{}"))
assert(isPallindrome("A lot not new I saw as I went on to L.A."))
*/
