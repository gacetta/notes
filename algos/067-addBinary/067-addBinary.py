class Solution:
    def addBinary(self, a: str, b: str) -> str:
        # Initialize an empty string to store the result
        res = ""
        # Initialize a variable to keep track of the carry
        carry = 0

        # Reverse both input strings to simplify addition from right to left
        a, b = a[::-1], b[::-1]

        # Iterate through each digit of the longer binary string
        for i in range(max(len(a), len(b))):
            # Extract the current digits of a and b (or 0 if the string is shorter)
            digitA = ord(a[i]) - ord("0") if i < len(a) else 0
            digitB = ord(b[i]) - ord("0") if i < len(b) else 0

            # Calculate the total sum of the current digits and carry
            total = digitA + digitB + carry
            # Calculate the current digit of the result
            char = str(total % 2)
            # Append the current digit to the result
            res = char + res
            # Update the carry for the next iteration
            carry = total // 2

        # If there is a remaining carry after the loop, append it to the result
        if carry:
            res = "1" + res

        # Return the final result
        return res
