class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let res: Record<string, number> = {}
        for(let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]
            if(complement in res) return [res[complement], i]

            res[nums[i]] = i
        }
    }
}
