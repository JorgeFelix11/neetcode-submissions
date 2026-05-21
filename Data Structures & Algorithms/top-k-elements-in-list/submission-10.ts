class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>()
        for(let i = 0; i < nums.length; i++){
                map.set(nums[i], (map.get(nums[i]) || 0) + 1)
            
        }
        const res = []
        const sorted = [...map].sort((a, b) => b[1] - a[1]).slice(0, k).map(arr => arr[0])
    
        return sorted
    }
}
