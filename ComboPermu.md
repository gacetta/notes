Combinations vs Permutations

[1, 2]

Combinations: [], [1], [2], [1, 2]
- order doesn't matter
- include all possible subsets, even when some/all elements are missing
- 2 ^ n possible combinations

Permutations: [1, 2], [2, 1]
- order does matter
- include subsets that are the same length as original array.
- n! permutations

# Generating combinations
      []
      /\
    []    [1]
    /\     /\
  [] [2] [1] [1, 2]

# take it or leave it
Generating combinations is about generating choices

# example 1


`back tracking`

# example 2
function subsetSum2(nums, target) {
  // base cases
  if (target === 0) return true;
  if (!nums.length)  return false;

  return (subsetSum2(nums.slice(1), target - nums[0])) //take it
          || // or
          subsetSum2(nums.slice(1), target); //leave it
}

# Permutations
"take it or take it"
