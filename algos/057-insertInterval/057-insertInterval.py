class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        res = []

        for i in range(len(intervals)):
            newIntervalStart = newInterval[0]
            newIntervalEnd = newInterval[1]
            curIntervalStart = intervals[i][0]
            curIntervalEnd = intervals[i][1]

            # non-overlap: newInterval is before
            if newIntervalEnd < curIntervalStart:
                res.append(newInterval)
                return res + intervals[i:]
            # non-overlap: newInterval is after
            elif newIntervalStart > curIntervalEnd:
                res.append(intervals[i])
            # overlap!
            else:
                newInterval = [min(newIntervalStart,curIntervalStart), max(newIntervalEnd, curIntervalEnd)]

        res.append(newInterval)
        return res