/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let currentStr = "";
    let lastLongStr = "";
    
    for(let i = 0;i<s.length;i++){
        let curStr = s[i];
        if(currentStr.split("").includes(curStr)){
            currentStr = currentStr.slice(currentStr.indexOf(curStr)+1);
        }
        currentStr += curStr;
        lastLongStr = currentStr.length>lastLongStr.length?currentStr:lastLongStr;
    }
    return lastLongStr.length;
};