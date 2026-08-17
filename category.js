/*
=========================================
BRICE TEXT
CATEGORY COPY SYSTEM
=========================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


const copyButtons =
document.querySelectorAll(
".copy-btn"
);



copyButtons.forEach(
button=>{


button.addEventListener(
"click",
()=>{


const card =
button.closest(
".quote-card"
);



if(!card) return;



const text =
card.querySelector(
".quote-text"
).innerText;



navigator.clipboard.writeText(text)
.then(()=>{


button.innerHTML =
"✅ کپی شد";


setTimeout(()=>{


button.innerHTML =
"📋 کپی متن";


},1500);



});


});


});



});
