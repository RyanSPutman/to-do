let input = document.querySelector(".input-button");
input.addEventListener("click", () =>{
  let inputvalue =  document.querySelector(".input-field")
  let list = document.querySelector(".to-do")

  let listitem = list.appendChild(document.createElement("li"))
  listitem.innerText = inputvalue.value;
  let remove = listitem.appendChild(document.createElement("button"))
  remove.addEventListener("click", function(){
    list.removeChild(listitem)
  })
  remove.innerText = "Remove"
})