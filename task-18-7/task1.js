async function getdata(){
    const response= await fetch('https://fakestoreapi.com/products');
    const data=await response.json();
    let t =document.getElementById("table")
    for(let i=0;i<data.length;i++)
    {
        let tr =document.createElement("tr")
        t.appendChild(tr)

        
    let td1 =document.createElement("td")
    tr.appendChild(td1)
    td1 .textContent = data[i].category;
    let td2 =document.createElement("td")
    tr.appendChild(td2)
    td2 .textContent = data[i].description
    let td3 =document.createElement("td")
    tr.appendChild(td3)
    td3 .textContent = data[i].id;
    let td4 =document.createElement("td")
    tr.appendChild(td4)
    td4 .textContent = data[i].price

    let td5 =document.createElement("td")
    tr.appendChild(td5);
    let im =document.createElement("img")
    im.src = data[i].image;
    td5.appendChild(im);
    im.style= "width:100px"

    

   
    }
}
getdata();