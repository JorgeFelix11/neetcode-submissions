class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map = new Map<string, string[]>()
        for(let i = 0; i < strs.length; i++) {
            let arr = new Uint8Array(26)
            for(let j = 0; j < strs[i].length; j++) {
                let letterIdx = this.getLetterIndex(strs[i][j])
                arr[letterIdx]++ 
            }
            map.set(arr.toString(), [...(map.get(arr.toString()) || []),strs[i]])
        }
        return [...map.values()]
    }

    getLetterIndex(letter) {
        return letter.toUpperCase().charCodeAt(0) - 65
    }
}
