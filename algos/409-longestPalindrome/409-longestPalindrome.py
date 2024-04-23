class Solution:
    def longestPalindrome(self, s: str) -> int:
        # Build a dictionary to store character counts
        char_count = {}
        
        # Count occurrences of each character
        for char in s:
            char_count[char] = char_count.get(char, 0) + 1
        
        # Initialize result and flag for odd count
        result = 0
        odd_found = False
        
        # Traverse the dictionary
        for count in char_count.values():
            # If count is even, add it directly to the result
            if count % 2 == 0:
                result += count
            # If count is odd, add count - 1 to result and set odd_found to True
            else:
                odd_found = True
                result += count - 1
        
        # If an odd count was found, add 1 to the result
        if odd_found:
            result += 1
        
        return result