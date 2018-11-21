/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tempList = {}
    for(let i=0;i<nums.length;i++){
        let vA = tempList["s"+(target-nums[i])];
        if(vA||vA==0){
            return [vA,i]
        }        
        tempList["s"+(nums[i])] = i
    }
};