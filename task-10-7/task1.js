/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
if(parseInt(num1) > parseInt(num2))
{
console. log("The larger is "+ num1);
}else
{
    console. log("The larger is "+ num2);
}

 /******* End Your Code ********* */



 /* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
var x=3;
var y=-7;
var z=2;
if (x>0 && y>0 && z>0)
{
       alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
          alert("The sign is -");
        }
        else if (x>0 && y<0 && z<0)
        {
          alert("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
          alert("The sign is +");
        }
        else
        {
          alert("The sign is -");
        }

 /******* End Your Code ********* */

 /* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  
  var x= 0;
var y=-1;
var z= 4;
if (x>y && x>z)
{
        if (y>z)
        {
            alert(x + ", " + y + ", " +z);
        }
        else
        {
            alert(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             alert(y + ", " + x + ", " +z);
        }
        else
        {
             alert(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            alert(z + ", " + x + ", " +y);
        }
        else
        {
            alert(z + ", " + y + ", " +x);
        }
}        

 /******* End Your Code ********* */

 /*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  var a=-5;
  var b=-2;
  var c=-6;
  var d=0;
  var f=-1;
if (a>b && a>c && a>d && a>f)
{
    alert(a);
}
else if (b>a && b>c && b>d && b>f)
{
   alert(b);
}
else if (c>a && c>b && c>d && c>f)
{
    alert(c);
}
else if (d>a && d>c && d>b && d>f)
{
    alert(d);
}
else
{
    alert(f);
}
 /******* End Your Code ********* */
 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  var x=10;
  var y=60;
  if(x>y)
  {
    alert("Hello World")
  }else{
    alert("Goodbye")
  }
 /******* End Your Code ********* */

 /* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
var rate=60;
if(rate<50)
{
  rate=  "fail"
  console.log(rate);
}
else if(rate>=50 && rate <= 59 )
{
    rate="E"
    console.log(rate);
}
else if(rate>=60&& rate<=96)
{
    rate="D";
    console.log(rate);
}
else if(rate=>70 && rate <=79 )
{
    rate="C";
    console.log(rate);
}
else if(rate>=80 && rate <=89 )
{
    rate="B";
    console.log(rate);
}
else if (rate>=90&& rate <=100 )
{
rate="A";
console.log(rate);
}

// 1. Write a JS code to print numbers from 1 to 10
for(let i=1; i<=10;i++)
{
    console.log(i);
    
}


/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr = [13,23,12,45,22,48,66,100];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2 == 0){
        console.log(arr[i]);
      }
}


/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
let n = 8; 
let string = "";

for (let i = 1; i <= n; i++) {
  
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);
/* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
let x = "don’t know why";
if(x.contains("y"))
{
    console.log("yes")
}else{
    console.log
}