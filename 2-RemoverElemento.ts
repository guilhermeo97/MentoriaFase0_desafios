function removeElement(nums: number[], val: number): number {
    let IgualVal = 0;
    let difVal = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[difVal] === nums[i];
            difVal++;
        }
    }

    return difVal;
};

console.log(removeElement([3, 2, 2, 3], 3));