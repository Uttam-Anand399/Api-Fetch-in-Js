let quote=document.querySelector("#quote");
let author=document.querySelector("#author");
let btn=document.querySelector("#btn");

const url="http://api.quotable.io/random";

async function getQuote(){
    let res=await fetch(url);
    console.log(res);
    let data=await res.json();
    // console.log(data.content);
    quote.innerText=data.content;
    // console.log(data.author);
    author.innerText=data.author;
    
    
}
btn.addEventListener("click",()=>{
    getQuote();
});
    