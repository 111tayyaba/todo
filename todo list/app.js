var list =document.getElementById("list");

   function ad(){
  var a = document.getElementById("input1").value;

 var li=document.createElement("li")
  var liText= document.createTextNode(a)
  li.appendChild(liText)
list.appendChild(li)
var delbtn= document.createElement("button")
var deltext = document.createTextNode("Delete")
delbtn.appendChild(deltext)
li.appendChild(delbtn)
var editbtn = document.createElement("button")
var edittext= document.createTextNode("Edit")
editbtn.appendChild(edittext)
li.appendChild(editbtn)
editbtn.setAttribute("onclick","edit(this)")
delbtn.setAttribute("class","delbtn")  
delbtn.setAttribute("onclick","delitem(this)") 

input1.value=""
console.log(li);
}
function delitem(b){
b.parentNode.remove()
}
function delAll(){
  list.innerHTML= ""
}
 function edit(b){
  
  b.parentNode.firstChild.nodeValue
  var c = prompt("Edit Text");
  c=b.parentNode.firstChild.nodeValue


 }
