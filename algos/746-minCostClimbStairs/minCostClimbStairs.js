/*
You are given an integer array `cost` where `cost[i]` is the cost of `i`th step on a staircase.  once you pay the cost, you can either climb one or two steps.

you can either start from the step with index 0, or the step with index 1

return the minimum cost to reach the top of the floor.

EX1
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is: start on cost[i], pay that cost and go to the top

EX2
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is: start on cost[0]. only step on 1s, skipping cost[3]


DP Solution
Subproblem: 



*/
// input: array of "costs"
// output: "the cost" which is a number
function minCostClimbStairs(arr) {
  // append a zero to the end
  // iterate over the array backwards 
    // we know cost[lastEl] equals the cost
}
