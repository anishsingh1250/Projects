let url = "https://catfact.ninja/fact";
let url2 ="https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("#cat");
btn.addEventListener("click", async()=>{
let fact= await getFacts();
//console.log(fact);
let abc=document.querySelector("#result");
abc.innerText = fact;
})

let btn2 = document.querySelector("#dog");
btn2.addEventListener("click", async()=>{
let image= await getImages();
//console.log(image);
let abcd=document.querySelector("#results");
abcd.setAttribute("src",image);

 })

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error-",e);
        return "No fact found";
    }
}

async function getImages() {
    try{
        let res = await axios.get(url2);
       return res.data.message;
    } catch (e) {
        console.log("error-",e);
        return "No image found";
    }
}




