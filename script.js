/* HARF AKHAR V5 FIX
   Fixed JavaScript structure
   Replace your old script.js with this file.
*/

const quotes = [
{
id:1,
category:"love",
text:"تو فقط یک آدم در زندگی من نیستی؛ تو همان آرامشی هستی که بعد از تمام طوفان‌ها دنبالش می‌گشتم."
},
{
id:2,
category:"love",
text:"عشق واقعی یعنی در سخت‌ترین روزها هم دلیل ماندن یکدیگر باشیم."
},
{
id:3,
category:"life",
text:"هر روز یک فرصت تازه برای بهتر شدن است."
}
];

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
