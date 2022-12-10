let btn = document.getElementById("btn");
let div = document.getElementById("div");
count = 0;

let color = [
  "red",
  "orange",
  "yellow",
  "pink",
  "grey",
  "purple",
  "black",
  "blue",
  "cyan",
  "lime",
  "maroon",
  "coral",
  "violet",
  "green",
];

btn.addEventListener("click",()=>{
   
    if(count == 14){
        count = 0;
        div.setAttribute("style", `background-color:${color[count]}`);
        count++;
    }
    else{
        div.setAttribute("style", `background-color:${color[count]}`);
        count++;
    }
})