var isim =document.getElementById("name");
var surname=document.getElementById("surname");
var age=document.getElementById("age");
var add=document.getElementById("add");
var tbody=document.getElementById("tbody")
var plus=document.getElementById("plus")
var input_line=document.getElementById("input_line")
var repository=[]
var pass=true
//////////////////////////////////////////////////////////////////////////////////////
function Adding(e){
    var inputs= [...document.querySelectorAll("input")]
    if(!inputs[0].value){ alert( "Please fill the required places")}else{
    inputs.map((input)=>{input.parentElement.textContent=input.value  })
    e.target.textContent="Edit"
    e.target.removeAttribute("id")
    e.target.classList.add( "edit_btn")
    e.target.removeEventListener("click",Adding)
    e.target.addEventListener("click",Edit)
    rowNum(e)
    pass=true 
}}
 ////////////////////////////////////////////////////////////////////////////
function rowNum(e){
    var rows=[...document.querySelectorAll("tbody tr")]
    rows.map((row,key)=>{
        row.firstChild.textContent=key+1 })
}

 ///////////////////////////////////////////////////////////////////////////////////////
 function Edit(e){
   var datas=[...e.target.closest("tr").querySelectorAll("td")].slice(1 ,4)
      datas.map((dd)=>{    
            var next_inputs=document.createElement("input")
            repository.push(dd.textContent)
            next_inputs.value=dd.textContent
            dd.textContent=" "
            dd.append(next_inputs);
         })
     e.target.textContent="Save"
     e.target.removeEventListener("click",Edit)
     e.target.addEventListener("click",Save)
     e.target.nextElementSibling.textContent="Cancel"
     e.target.nextElementSibling.removeEventListener("click",Remove)
     e.target.nextElementSibling.addEventListener("click",Cancel)
    }

//////////////////////////////////////////////////////////////////////////////////////////////
function Save(e){
    let save_datas=[...e.target.closest("tr").querySelectorAll("input")]
    save_datas.map((a)=>{a.parentElement.textContent=a.value})
     repository=[]
e.target.textContent="Edit"
e.target.removeEventListener("click",Save)
e.target.addEventListener("click",Edit)
e.target.nextElementSibling.textContent="Remove"
e.target.nextElementSibling.removeEventListener("click",Cancel)
e.target.nextElementSibling.addEventListener("click",Remove)
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Cancel(e){
let cancel_datas=[...e.target.closest("tr").querySelectorAll("td")].splice(1,3)
cancel_datas.map((a,key)=>{a.textContent=repository[key]})
repository=[]
e.target.textContent="Remove"
e.target.removeEventListener("click",Cancel)
e.target.addEventListener("click",Remove)
e.target.previousElementSibling.textContent="Edit"
e.target.previousElementSibling.removeEventListener("click",Save)
e.target.previousElementSibling.addEventListener("click",Edit)
}
 ////////////////////////////////////////////////////////////////////////////////////////////////
 function Remove(e){ 
       e.target.parentElement.parentElement.remove() 
       rowNum(e)}
 ///////////////////////////////////////////////////////////////////////////////

plus.addEventListener("click",()=>{
if(pass){
pass=false
var tr =document.createElement("tr")
tr.classList.add("row")
tbody.append(tr)
const td0=document.createElement("td")
const td1=document.createElement("td")
const td2=document.createElement("td")
const td3=document.createElement("td")
const td4=document.createElement("td")
td4.classList.add("btns")
tr.append(td0,td1,td2,td3,td4)
const input_name=document.createElement("input")
const input_surnnme=document.createElement("input")
const input_age=document.createElement("input")
td1.append(input_name)
td2.append(input_surnnme)
td3.append(input_age)
const button_add=document.createElement("button");
button_add.addEventListener("click",Adding)
const button_romove=document.createElement("button");
button_romove.addEventListener("click",Remove)
button_add.textContent="Add";
button_romove.textContent="Remove";
td4.append(button_add,button_romove);
button_add.setAttribute("id","add");
button_romove.classList.add("remove_btn")
}})
//////////////////////////////////////////////////////////


