class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # Time Efficiency
        hashmap = set()

        for num in nums:
            if num in hashmap:
                return True
            hashmap.add(num)
        return False
        
        # # Space Efficiency
        # nums.sort()

        # for n in range(1, len(nums)):
        #     if nums[n] == nums[n-1]:
        #         return True
            
        # return False