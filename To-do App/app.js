const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");


const CHECK = "fa-solid fa-circle-check complete";
const UNCHECK = "fa-regular fa-circle complete";
const LINE_THROUGH = "lineThrough";

function addToDo(toDo,id,done,trash){

  if(trash){
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const text = `<li class="item">
                  <i class="${DONE}" id="${id}"></i>
                  <p class="text ${LINE}">${toDo}</p>
                  <i class="fa-solid fa-trash delete" id="${id}"></i>
                </li>`;
  const position = "beforeend";
  list.insertAdjacentHTML(position,text);              
}

document.addEventListener("keyup",function(event){
  if(event.keyCode == 13){
    const toDo = input.value;
    if(toDo){
      addToDo(toDo,id,false,false);
      LIST.push(
        {
          name: toDo,
          id: id,
          done: false,
          trash: false

        }
      )
    } 
    input.value = "";
  }
})

function completeToDo(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done ? false : true;
}

