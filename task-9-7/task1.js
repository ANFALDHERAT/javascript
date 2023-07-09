/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 




*/
let x=250;
let zakat=2.5/100;
zakat=zakat*x;
console.log(zakat);

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
const arr1=[1,7,9,45];
const arr2=["Str", "alex","moh"];
const arr3=['the','fox' ,'over' ,'lazy', 'dog',]

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits=["Tomato","Banana","Watermelon"];

console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));





/*



3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
const anfal=["pizza","burger","football","basketball","swimming","screem","teddy"]
/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
var firstArray=[1,4,5];
var farray=["t","u","g","x"];
let f1=firstArray[0];

console.log(f1);
let f = farray[0];
console.log(f);
/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
var lastarray=[1,4,5];
var laarray=["t","u","g","x"];
let l1=lastarray[lastarray.length-1];
console.log(l1);
let l = laarray[laarray.length - 1];
console.log(l);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
let a=[0,5,7,9];
a.shift(0);
a.shift(0);
a.shift(0);
a.push(10);
a.unshift(1,3,4,6,8);
console.log(a);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var ar1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(ar1.sort(function(a, b){return a-b}));