let data = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJyrQ7pGJt1mr-QGh5HZR1uMHB5ueeXgH8w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNeOCPAMNn3k-Y41hCn2ynmC8JhXLmzG_EMQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvLpSDFSirFwMeHQpwXdfHROkolw11uaeQw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zjqiKXe8Wxi6Ba4THayUPWuIXsYJccJVjA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQMrH4sF1J1MdR86JTNVzBmIc8aCGxFdAjQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTb5kMrvl7veQuFrgOU8tcWQmeNqFClQ2qJuDAgxImpDh9WWBY29mhnrxix60o_2Jf3c&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCgaUalCN4AuA6R3iHsj3t9WYQtE4k5kAsQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSIQFqTv4dIdsKXrEAuHpbo4zORC1Gs7XMox9EnX5V00HJnZsxnrOr92HaIzMmgfVEq0&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77Wi61E4ScCil1pSN9IBQGcwhDhqlIrYcGtaUSOz8qDnYlw54bifCCggPOi8X7JjQ-r8&usqp=CAU",
];


let prev = document.getElementById("prev");
let next = document.getElementById("next");
var count = 0;


prev.addEventListener("click",() => {
    if(count == -1){
        count = 8;
        image();
        count--;
    }
    else{
        image();
        count--;
    }
})

next.addEventListener("click",() => {
    if(count == 9){
        count = 0;
        image();
        count++;
    }
    else{
        image();
        count++;
    }
})

function image(){
    console.log(count)
    let url = data[count];
    document.getElementById("image").src = `${url}`;
}

setInterval(() =>{
    if (count == 9) {
      count = 0;
      image();
      count++;
    } else {
      image();
      count++;
    }
},3000)