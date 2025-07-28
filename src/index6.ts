function maxValue(nums: number[]) {
  let maxval = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxval) {
      maxval = nums[i];
    }
  }

  return maxval;
}

let num1: number[] = [1, 8, 5, 22, 4, 9, 88, 75, 29, 43, 51, 226, 452, 58];

console.log(maxValue(num1));

interface Address {
  city: string;
  pincode: number;
}

//Address array

// interface User {
//   name: string;
//   age: number;
//   addresses: Address[];
// }
