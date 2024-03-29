class RandomizedSet:

    def __init__(self):
        self.numMap = {} # num: indexOfNumList
        self.numList = [] 

    def insert(self, val: int) -> bool:
        valExists = val in self.numMap

        if valExists:
            return False

        # update map
        self.numMap[val] = len(self.numList)

        # update list
        self.numList.append(val)

        return True

    def remove(self, val: int) -> bool:
        valExists = val in self.numMap

        if valExists:
            valIndex = self.numMap[val]
            lastVal = self.numList[len(self.numList) - 1]

            # update list
            self.numList[valIndex] = lastVal
            self.numList.pop()

            # update map
            self.numMap[lastVal] = valIndex
            del self.numMap[val]
            return True

        return False

    def getRandom(self) -> int:
        return random.choice(self.numList)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()