console.log("saeed")
// document.write("hello world")
let btn=document.getElementById("btn") //taking whole element or tag
let list=document.getElementById('li')//taking list element 
var ip=document.getElementById("input")//taking input field tag in ip variable 
btn.addEventListener("click",()=>{
    let input=ip.value;        //extracting only value from the whole tag which is ip
    console.log(input)
    let li=document.createElement("li")  //creating element with id li  
    li.innerText=input
    
    let rembutton=document.createElement("button")  //creating element button
    rembutton.innerText="Remove"   
        //button name
        rembutton.onclick=()=>{
            li.remove()
        }
    list.appendChild(li) 
    li.appendChild(rembutton)
   
    ip.value=""
})
