class RandomizedSet:

    def __init__(self):
        self.numMap = {}
        self.numList = []

    def insert(self, val: int) -> bool:
        valExists = val in self.numMap

        if valExists:
            return False
        else:
            # deal with map
            self.numMap[val] = len(self.numList)

            # deal with list
            self.numList.append(val)

            return True

    def remove(self, val: int) -> bool:
        valExists = val in self.numMap

        if valExists:
            valIndex = self.numMap[val]
            lastVal = self.numList[len(self.numList) - 1]

            # deal with list
            self.numList[valIndex] = lastVal
            self.numList.pop()

            # deal with map
            self.numMap[lastVal] = valIndex
            del self.numMap[val]
            return True
        else:
            return False

    def getRandom(self) -> int:
        return random.choice(self.numList)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()