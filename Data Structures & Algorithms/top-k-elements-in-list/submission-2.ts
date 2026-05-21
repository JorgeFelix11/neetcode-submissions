class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>()
        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])) {
                const num = map.get(nums[i]) + 1
                map.set(nums[i], num)
            }
            else map.set(nums[i], 1)
        }
        const res = []
        const sorted = [...map].sort((a, b) => b[1] - a[1]).slice(0, k).map(arr => arr[0])
    
        return sorted
    }
}
