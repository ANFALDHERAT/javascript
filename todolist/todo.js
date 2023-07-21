const input1 =document.getElementById("input-box");

const list=document.getElementById("list-container");
const input2 = document.getElementById("input-box2");
input2.addEventListener("input", searchTask);
const apikey = 'https://64ba9cdb5e0670a501d67185.mockapi.io/todo'; 
   const si = document.querySelector(".row input");
  const sp = document.querySelector(".row .button1");
  
  async function check() {
    try {
      const response = await fetch(apikey);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      let listHTML = "";

      
      data.forEach((item) => {
        listHTML += `<li>${item.name}<button class="b1" onclick="removeItem(event)">Delete</button><button class="b2" onclick="updateItem(event)">Update</button></li><hr>`;
      });

      list.innerHTML = listHTML;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  sp.addEventListener("click", async () => {
    try {
      const response = await fetch(apikey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: si.value })
      });

      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      check();
      si.value = ''; 
    } catch (error) {
      console.error("Error adding task:", error);
    }
  });

  check();
  
function addtask()
{
if(input1.value === '')
{
    alert("right some thing")
}
else{
    let li=document.createElement("li");
    li.innerHTML=input1.value ; 
    li.className ="list1"
   list.appendChild(li);

   let deleteButton = document.createElement("button");
   deleteButton.className = "delete";
   deleteButton.appendChild(document.createTextNode("Delete"));
   deleteButton.addEventListener("click", removeItem); 
   li.appendChild(deleteButton);

   let editButton = document.createElement("button");
   editButton.className = "Update";
   editButton.appendChild(document.createTextNode("Update"));
   editButton.addEventListener("click", updateItem);
   li.appendChild(editButton);

   let h = document.createElement("hr");
   list.appendChild(h);

}
savedata()
}
function removeItem(e) {
    if (confirm("Are you sure you want to delete this task?")) {
      let listItem = e.target.parentElement;
      listItem.remove();
    }
    savedata()
  }
  function updateItem(e) {
    let listItem = e.target.parentElement;
    let taskText = listItem.firstChild.textContent;
  
    let updatedText = prompt("Update the task:", taskText);
    if (updatedText !== null) {
      listItem.firstChild.textContent = updatedText;
    }
    savedata()
  }  
   

  function savedata()
  {
    localStorage.setItem("data",list.innerHTML)
  }
  function show(){
    list.innerHTML=localStorage.getItem("data")

  }
  show();
  function searchTask() {
    const searchText = input2.value.toLowerCase();
    const tasks = list.getElementsByTagName("li");
    
    for (let i = 0; i < tasks.length; i++) {
      const taskText = tasks[i].textContent.toLowerCase();
      if (taskText.includes(searchText)) {
        tasks[i].style.display = "block"; 
      } else {
        tasks[i].style.display = "none"; 
      }
    }
  }
 
  
  

