let nums = [2,7,11,15]
let target = 9

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum(nums, target))

// this example is utilizing a nested for loop, which I understand isn't the most efficient way to accomplish this. Rather than pass off gained knowledge from an LLM about creating a hashmap, I want to display my current knowledge. 

// Soon I'll ammend this when I believe I can answer this question unassisted correctly. 