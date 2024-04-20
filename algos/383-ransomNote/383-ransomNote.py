class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
      #create hash map of chars in magazine
      #check against chars in ransomNote
      charCount = {}

      #Count occurances of char in magazine
      for char in magazine:
          charCount[char] = charCount.get(char, 0) + 1

      #Check if randomNote can be constructed from char in magazine
      for char in ransomNote:
          if char not in magazine or charCount[char] == 0:
              return False
          charCount[char] -= 1
      
      return True

      #-----------------------------------------------------------
      #Create a dictionary-like object that stores the count
      #of each character in the ransomNote and magazine strings.
      str1 = Counter(ransomNote)
      str2 = Counter(magazine)

      #perform a logical "and" operation between counter objects
      #retains only the characters that are common in both strings 
      #along with their minimum counts

      #This compares the resulting Counter object from the intersection 
      #operation with str1, the Counter object representing the characters 
      #in ransomNote. If they are equal, it means that all the characters 
      #required to construct ransomNote are present in magazine with at 
      #least the same frequency
      if str1 & str2 == str1:
          return True
      return False

      #-----------------------------------------------------------
      #This creates a set containing unique characters from the ransomNote string
      for n in set(ransomNote):
        #For each character n, it compares the count of that character 
        #in ransomNote with its count in magazine. If the count of n in 
        #ransomNote is greater than its count in magazine, it means that 
        #there are not enough occurrences of n in magazine to construct ransomNote.
        if ransomNote.count(n) > magazine.count(n):
          return False
        return True
      #-----------------------------------------------------------
      # This expression compares two Counter objects 
      # using the less than or equal to (<=) operator. 
      # In this context, it checks if the counts of characters 
      # in ransomNote are less than or equal to the counts 
      # of characters in magazine. The comparison is done element-wise. 
      # If for every character, the count in ransomNote is 
      # less than or equal to the count in magazine, 
      # the expression evaluates to True. 
      # Otherwise, it evaluates to False.
      return Counter(ransomNote) <= Counter(magazine)
