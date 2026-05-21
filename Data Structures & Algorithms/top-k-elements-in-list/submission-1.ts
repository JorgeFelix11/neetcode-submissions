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
        const priorityQueue = []
        const arrayMap = [...map]
        for(let i = 0; i < arrayMap.length; i++) {
            let added = false
            for(let j = 0; j < priorityQueue.length; j++) {
                if(!priorityQueue.length) priorityQueue.push(arrayMap[i]) 
                else if(arrayMap[i][1] > priorityQueue[j][1]) {
                    priorityQueue.splice(j, 0, arrayMap[i])
                    added = true
                    break;
                }
            }

            if(!added) priorityQueue.push(arrayMap[i])
        }
    let res = []
    for(let i = 0; i < k; i++) {
        res.push(priorityQueue[i][0])
    }
        return res
    }
}
