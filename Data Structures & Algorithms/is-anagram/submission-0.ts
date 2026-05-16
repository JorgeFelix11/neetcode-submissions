class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        let obj: Record<string, number> = {}
        for(let i = 0; i < s.length; i++) {
            if (obj[s[i]]) obj[s[i]] = obj[s[i]] + 1
            else obj[s[i]] = 1
        }
        for(let i = 0; i < t.length; i++) {
            if (obj[t[i]]) obj[t[i]] = obj[t[i]] - 1
            else return false
        }
        return true
    }
}
