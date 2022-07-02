const sumAll = function(int1,int2) {
let sum=0;
let lowerLimit;
let higherLimit;
if((int1<0)||(int2<0)||(!Number.isInteger(int1))||(!Number.isInteger(int2)))
{
    return 'ERROR';
}

if (int1<=int2)
{
lowerLimit=int1;
higherLimit=int2;
}
else
{
    lowerLimit=int2;
    higherLimit=int1;
}
for(let i=lowerLimit;i<=higherLimit;i++)
{
    sum+=i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
