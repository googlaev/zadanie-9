//1
/*
function to2(num){console.log((num).toString(2))}
to2(10)*/
//2
/*
let num1=2;
let num2=4;
let i=1;
while(i % num1 != 0 || i % num2!=0){i++}
console.log(i)*/
//3
/*
for(let j=1000;j<10000;j++){
happy(j)
}
function happy(a)
{
 	if(parseInt(a[0]) + parseInt(a[1]) == parseInt(a[2]) + parseInt(a[2]))  	{console.log(a)}
}*/
//6
/*
for(let j=100000;j<1000000;j++){
happy(j)
}
function happy(a)
{
 	if(parseInt(a[0]) + parseInt(a[1]) + parseInt(a[2]) == parseInt(a[3]) + parseInt(a[4]) +parseInt(a[5]) {console.log(a)}*/
//7
pal("Helleh")

function pal(str){
	str = str.toLowerCase();
	if(str !== str.split('').reverse().join(''))
	{
   	console.log('Не палиндром');
	}
	else{console.log('Палидром')}
}

              	