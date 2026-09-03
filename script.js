/* =====================================
   BRICE TEXT V8
   Optimized JavaScript
===================================== */

// ===============================
// COPY SYSTEM
// ===============================

function copyText(text, button){

    if(navigator.clipboard){

        navigator.clipboard.writeText(text)
        .then(()=>{

            if(button){

                button.innerHTML = "✅ کپی شد";

                setTimeout(()=>{

                    button.innerHTML = "📋 کپی متن";

                },1500);

            }

        })
        .catch(()=>{

            fallbackCopy(text, button);

        });

    }else{

        fallbackCopy(text, button);

    }

}

function fallbackCopy(text, button){

    const area = document.createElement("textarea");

    area.value = text;

    document.body.appendChild(area);

    area.select();

    document.execCommand("copy");

    area.remove();

    if(button){

        button.innerHTML = "✅ کپی شد";

        setTimeout(()=>{

            button.innerHTML = "📋 کپی متن";

        },1500);

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

    quotesContainer.innerHTML = "";

    list.forEach(quote=>{

        const card =
        document.createElement("div");

        card.className =
        "quote-card";

        card.innerHTML = `

        <p class="quote-text">
        ${quote.text}
        </p>

        <button class="copy-btn">
        📋 کپی متن
        </button>

        `;

        const btn =
        card.querySelector(".copy-btn");

        btn.onclick = ()=>{

            copyText(
                quote.text,
                btn
            );

        };

        quotesContainer.appendChild(card);

    });

}

// نمایش اولیه متن‌ها
window.addEventListener("load",()=>{

    if(typeof quotes !== "undefined"){

        displayQuotes(
            quotes.slice(0,6)
        );

    }

});

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
// RANDOM TEXT
// ===============================

const randomBtn =
document.getElementById("newQuoteBtn");

const randomText =
document.getElementById("randomQuote");

if(randomBtn && randomText){

    randomBtn.onclick = ()=>{

        if(typeof quotes !== "undefined"){

            const random =
            quotes[
                Math.floor(
                    Math.random()
                    *
                    quotes.length
                )
            ];

            randomText.innerHTML =
            random.text;

        }

    };

}

// ===============================
// CATEGORY COPY BUTTON
// ===============================

document
.querySelectorAll(".quote-box")
.forEach(box=>{

    const text =
    box.querySelector("p");

    if(text){

        text.classList.add(
            "quote-text"
        );

        const button =
        document.createElement("button");

        button.className =
        "copy-btn";

        button.innerHTML =
        "📋 کپی متن";

        button.onclick = ()=>{

            copyText(
                text.innerText,
                button
            );

        };

        box.appendChild(button);

    }

});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.onclick = ()=>{

        navLinks.classList.toggle(
            "active"
        );

    };

}
