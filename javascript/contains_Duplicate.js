function twoSum(nums, target) {

  const seen = Object.create(null);

  for (let i = 0, len = nums.length; i < len; ++i) {
    const num = nums[i];          
    const comp = target - num;      

    const j = seen[comp];

    if (j !== undefined) {
      return [j, i];
    }

    seen[num] = i;
  }

}
