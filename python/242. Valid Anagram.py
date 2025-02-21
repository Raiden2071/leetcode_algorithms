class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)



obj = Solution()
print(obj.isAnagram("anagram", "nagargm"))
