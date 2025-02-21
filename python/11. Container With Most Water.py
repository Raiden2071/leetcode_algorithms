class Solution:
    # def maxArea(self, height: list[int]) -> int:
    #     # Brute force (O(n^2))
    #     result = 0

    #     for l in range(len(height)):
    #         for r in range(l + 1, len(height)):
    #             area = (r - l) * min(height[l], height[r])
    #             result = max(area, result)
        
    #     return result
        def maxArea(self, height: list[int]) -> int:
            # Linear solution (O(n))
            l, r = 0, len(height)-1
            result = 0

            while l < r:
                print('l', l, 'r', r)
                area = (r - l) * min(height[l], height[r])
                result = max(area, result)

                if height[l] >= height[r]:
                    r -= 1
                else:
                    l += 1

            
            return result


print(Solution().maxArea([1,8,6,2,5,4,8,3,7]))