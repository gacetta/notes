/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const res = []

     for (let i = 0; i < intervals.length; i++) {
            const newIntervalStart = newInterval[0];
            const newIntervalEnd = newInterval[1];
            const curIntervalStart = intervals[i][0];
            const curIntervalEnd = intervals[i][1];

            // non-overlap: newInterval is before
            if (newIntervalEnd < curIntervalStart) {
                res.push(newInterval);
                return res.concat(intervals.slice(i));
            }
            // non-overlap: newInterval is after
            else if (newIntervalStart > curIntervalEnd) {
                res.push(intervals[i]);
            }
            // overlap!
            else {
                newInterval = [
                    Math.min(newIntervalStart, curIntervalStart),
                    Math.max(newIntervalEnd, curIntervalEnd)
                ];
            }
        }

        res.push(newInterval);
        return res;
};