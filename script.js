/* =====================================
   BRICE TEXT V6
   Complete JavaScript
===================================== */


// ===============================
// COPY SYSTEM
// ===============================

function copyText(text, button){

    if(navigator.clipboard){

        navigator.clipboard.writeText(text).then(()=>{

            if(button){
                button.innerHTML="✅ کپی شد";

                setTimeout(()=>{
                    button.innerHTML="📋 کپی متن";
                },1500);
            }

        });

    }else{

        let area=document.createElement("textarea");
        area.value=text;

        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();

        if(button){
            button.innerHTML="✅ کپی شد";

            setTimeout(()=>{
                button.innerHTML="📋 کپی متن";
            },1500);
        }

    }

}



// ===============================
// QUOTES DISPLAY
// ===============================


const quotesContainer =
document.getElementById("quotesContainer");


const searchInput =
document.getElementById("searchInput");



function displayQuotes(list){

if(!quotesContainer) return;


quotesContainer.innerHTML="";


list.forEach(quote=>{


const card=document.createElement("div");


card.className="quote-card";


card.innerHTML=`

<p class="quote-text">
${quote.text}
</p>

<button class="copy-btn">
📋 کپی متن
</button>

`;



const btn=card.querySelector(".copy-btn");


btn.onclick=()=>{

copyText(
quote.text,
btn
);

};



quotesContainer.appendChild(card);



});


}



if(typeof quotes !== "undefined"){

displayQuotes(
quotes.slice(0,6)
);

}




// ===============================
// SEARCH
// ===============================


if(searchInput){

searchInput.addEventListener(
"input",
()=>{


const value =
searchInput.value.trim();


if(typeof quotes !== "undefined"){

displayQuotes(

quotes.filter(q=>

q.text.includes(value)

)

);

}


});


}





// ===============================
// CATEGORY COPY BUTTON
// ===============================


document.querySelectorAll(".quote-box")
.forEach(box=>{


const text =
box.querySelector("p");



if(text){



text.classList.add(
"quote-text"
);



const button =
document.createElement("button");



button.className="copy-btn";


button.innerHTML=
"📋 کپی متن";



button.onclick=()=>{


copyText(
text.innerText,
button
);



};



box.appendChild(button);



}



});




// ===============================
// RANDOM TEXT
// ===============================


const randomBtn =
document.querySelector(".random-btn");


const randomText =
document.getElementById("randomQuote");



if(randomBtn && randomText && typeof quotes !== "undefined"){


randomBtn.onclick=()=>{


let random =
quotes[
Math.floor(
Math.random()*quotes.length
)
];


randomText.innerHTML =
random.text;



};


}





// ===============================
// MOBILE MENU
// ===============================


const menuBtn =
document.querySelector(".menu-btn");


const navLinks =
document.querySelector(".nav-links");



if(menuBtn && navLinks){


menuBtn.onclick=()=>{


navLinks.classList.toggle(
"active"
);


};


}





// ===============================
// LOADER
// ===============================


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"loaded"
);



const loader =
document.getElementById("loader");



if(loader){


setTimeout(()=>{


loader.style.display="none";


},700);



}



});



window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if(loader){
            loader.style.display = "none";
        }

    },500);

});
