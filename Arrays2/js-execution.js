// to convert a number to binary in JavaScript

function convertToBinary(x)
{
    let bin=0;
    let i=1;
    while(x!=0)
    {
        let rem=x%2;
        x=parseInt(x/2);
        bin= bin + rem*i;
        i=i*10;
    }
    return bin;
}
let result=convertToBinary(9);
    console.log(result);