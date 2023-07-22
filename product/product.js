let productimg=document.getElementById("pimg");
let btn=document.getElementsByClassName("btn");
 
btn[0].onclick=function()
{
    productimg.src="m1.PNG"
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
 
btn[1].onclick=function()
{
    productimg.src="m2.PNG"
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
 
btn[2].onclick=function()
{
    productimg.src="m3.PNG"
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}