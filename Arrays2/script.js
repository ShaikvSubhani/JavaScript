function sumOfDigits(n)
{
    let sum=0;
    while(n!=0)
    {
        let rem=n%10;
        sum+=rem;
        n=parseInt(n/10);
    }
    return sum;
}

let result1=sumOfDigits(1334)
let result2=sumOfDigits(1563)
console.log(result1)
console.log(result2)

let arr=[10,20,30]
console.log(arr)
arr.push(90)
console.log(arr)
console.log(arr.length)

//to insert a element at desired index

let arr1=[1,2,3,4];
let index=1;
let num=10;
arr1.push(num);

for(let i=arr1.length-1;i>index;i--)
{
    let temp=arr1[i];
    arr1[i]=arr1[i-1];
    arr1[i-1]=temp;
}

console.log(arr1);

// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let i=0,j=1;
    while(j<nums.length)
    {
        if(nums[i]!=nums[j])
        {
            nums[++i]=nums[j];
        }
        j++;
    }

    return i+1;
};