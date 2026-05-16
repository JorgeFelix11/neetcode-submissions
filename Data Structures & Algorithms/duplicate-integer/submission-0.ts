class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
   /** hasDuplicate(nums: number[]): boolean {
        let obj = {}
        for(let i = 0; i < nums.length; i++) {
            if(obj[nums[i]]) return true
            obj[nums[i]] = true
        }
        return false
    } */
   hasDuplicate(nums: number[]): boolean {
        let numSet = new Set<number>()
        for(let num of nums) {
            if(numSet.has(num)) return true
            numSet.add(num)
        }
        return false
    }
}
