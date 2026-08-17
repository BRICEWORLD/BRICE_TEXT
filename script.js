/* BRICE TEXT V5 FIX
Fixed JavaScript structure
Brice Text Website
*/

// quotes loaded from quotes.js

const quotesContainer = document.getElementById("quotesContainer");
const searchInput = document.getElementById("searchInput");

function displayQuotes(list){
if(!quotesContainer) return;
quotesContainer.innerHTML = "";

list.forEach(quote=>{
    const card=document.createElement("div");
    card.className="quote-card";
    card.innerHTML=`
    <p class="quote-text">${quote.text}</p>
    <button class="copy-btn">📋 کپی متن</button>`;

    card.querySelector(".copy-btn").onclick=()=>{
        navigator.clipboard.writeText(quote.text);
    };

    quotesContainer.appendChild(card);
});

}

displayQuotes(quotes);

if(searchInput){
searchInput.addEventListener("input",()=>{
const value=searchInput.value.trim();
displayQuotes(
quotes.filter(q=>q.text.includes(value))
);
});
}

window.addEventListener("load",()=>{
document.body.classList.add("loaded");
const loader=document.getElementById("loader");
if(loader){
setTimeout(()=>loader.style.display="none",700);
}
});

// Category pages copy system

document.querySelectorAll(".quote-box").forEach(box=>{

const text = box.querySelector("p");

if(text){

text.classList.add("quote-text");


const button = document.createElement("button");

button.className="copy-btn";

button.innerHTML="📋 کپی متن";


button.onclick=()=>{

navigator.clipboard.writeText(text.innerText);


button.innerHTML="✅ کپی شد";


setTimeout(()=>{

button.innerHTML="📋 کپی متن";

},1500);


};


box.appendChild(button);


}

});
