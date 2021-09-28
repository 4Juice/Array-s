const btn1 = document.getElementById("btn");
const input = document.getElementById("input1");
const firstdeletebtn = document.getElementById("fisrt-delete-btn");
let firstdelete = [];

btn1.addEventListener("click", () => {
    let i=0;
    if (input.value.length > 0){
        firstdelete.push(input.value,);
        input.value = "";      
        
        var t = document.createTextNode(firstdelete[i]);       
        
    i++; 
    }
   console.log(firstdelete)
   document.getElementById("first-delete").innerText = firstdelete ;
    var btn = document.createElement("button");
    var t = document.createTextNode([i]);
    btn.style.height = "35px"
    btn.style.fontSize = "25px"
    btn.style.cursor = "pointer"
    document.body.appendChild(btn);
    btn.appendChild(t);
   
})
