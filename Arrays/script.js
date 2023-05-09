//Arrays
let a="arvind";
let b=20;

let arr=["arvind",22]

console.log(arr[1])  

let n=arr.length;
console.log(n)

console.log(arr[99]) 
// in javascript it will not throw error as 99 index is not present -> it will
//  give you the output undefined



//to calculate sum of digits in js
let x=198432;
let sum=0;
while(x!==0)
{
    let rem=x%10;
    sum+=rem;
    //in js 12/10 --> 1.2 not 1 so you need to parseInt to 1. 
    x=parseInt(x/10);
}

console.log(sum);

//to check whether a number is pallindrome or not
let z=1331;
let temp=z;
let m=0;
while(z!=0)
{
    m= m*10 + z%10;
    z=parseInt(z/10);
}

if(m==temp)
{
    console.log("It is pallindrome")
}
else
console.log("not pallindrome");

//2nd approach using array

let arr1=[]

let y=121341;
let temp1=y;
let index=0;

while(y!=0)
{
    arr1[index++]=y%10;
    y=parseInt(y/10);
}

console.log(arr1);
let i=0;
let j=arr1.length-1;
let flag=true;
while(i<=j)
{
    if(arr1[i]!=arr1[j])
    {
        flag=false;
        break;
    }

    i++;
    j--;
}

flag ? console.log("is pallindrome") : console.log("not pallindrome")
