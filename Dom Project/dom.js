const button= document.getElementById("btn");
const colorText = document.querySelector(".color");

const hex=[
   "0",
   "1",
   "2",
   "3",   
   "4",
   "5",
   "6",
   "7",
   "8",
   "9",
   "A",
   "B",
   "C",
   "D",
   "E",
   "F",
 
]
button.addEventListener("click", () =>{
   // alert("cliked");
   const hexcolor=generateHexColor();
   document.body.style.backgroundColor = hexcolor;
   colorText.textContent = hexcolor;
})
const generateHexColor = () =>{
   let hexcolor="#";
   for(let i=0; i<6; i++){
      hexcolor += hex[getRandomIndex()]
   }
   // alert(hexcolor);
   return hexcolor;
} 

const getRandomIndex = () =>{
   return Math.floor(Math.random()*hex.length) 
}