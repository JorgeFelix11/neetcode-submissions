class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>()
        for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }
        return [...map].sort((a, b) => b[1] - a[1]).slice(0, k).map(arr => arr[0])
    }
}
