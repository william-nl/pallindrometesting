/* isPallindrome(string) returns true or false. If true, the string is a pallindrome. If false, the string is not a pallindrome */
/*A pallindrome is a word, phrase, number, or sequence of words that reads the same backwards as forwards */

function isPallindrome(s:any) : Boolean {
    if(typeof s != "string") {
        return false;
    }
    s = s.replace(/[.,/?#!$%^&@*;:{}=_`~()]/g, "").replace(/ /g,'').toLowerCase();
    for(var i = 0; i < s.length/2; i++) {
        if (s[i] != s[s.length-i-1]) return false;
    }
    return true;
}

module.exports = isPallindrome;
