/*==================================================
HARF AKHAR V3
Luxury JavaScript
By Pouya Brice
==================================================*/


//==================================================
// LOADER
//==================================================


window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";

            loader.style.visibility="hidden";

        },800);

    }

});




//==================================================
// MOBILE MENU
//==================================================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){


    menuBtn.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


        menuBtn.classList.toggle("open");


    });



    document.querySelectorAll(".nav-links a")
    .forEach(link=>{


        link.addEventListener("click",()=>{


            navLinks.classList.remove("active");


        });


    });


}




//==================================================
// HEADER SCROLL EFFECT
//==================================================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(header){


        if(window.scrollY > 80){


            header.classList.add("scrolled");


        }else{


            header.classList.remove("scrolled");


        }


    }


});




//==================================================
// BACK TO TOP BUTTON
//==================================================


const backTop = document.querySelector(".back-top");


window.addEventListener("scroll",()=>{


    if(backTop){


        if(window.scrollY > 500){


            backTop.classList.add("active");


        }else{


            backTop.classList.remove("active");


        }


    }


});



if(backTop){


    backTop.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}/*==================================================
SCROLL REVEAL ANIMATION
==================================================*/


const revealElements = document.querySelectorAll(
    ".service-card, .portfolio-card, .gallery-item, .about-content, .about-image, .stat-box"
);



const revealOnScroll = ()=>{


    revealElements.forEach(element=>{


        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){


            element.style.opacity="1";

            element.style.transform="translateY(0)";


        }


    });


};



revealElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform="translateY(50px)";

    element.style.transition="all .8s ease";


});



window.addEventListener(
    "scroll",
    revealOnScroll
);



revealOnScroll();




//==================================================
// NUMBER COUNTER
//==================================================


const counters = document.querySelectorAll(".counter");



counters.forEach(counter=>{


    counter.innerText="0";


    const updateCounter = ()=>{


        const target = +counter.getAttribute("data-target");


        const current = +counter.innerText;


        const increment = target / 100;



        if(current < target){


            counter.innerText = 
            Math.ceil(current + increment);



            setTimeout(
                updateCounter,
                20
            );


        }else{


            counter.innerText = target;


        }


    };



    const observer = new IntersectionObserver(entries=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                updateCounter();

                observer.disconnect();


            }


        });


    });



    observer.observe(counter);


});




//==================================================
// IMAGE HOVER EFFECT
//==================================================


const images = document.querySelectorAll(
    ".gallery-item img, .portfolio-card img"
);



images.forEach(image=>{


    image.addEventListener(
        "mousemove",
        (e)=>{


            const
              /*==================================================
TYPE WRITER EFFECT
==================================================*/


const typingText = document.querySelector(".typing");


if(typingText){


    const text =
    typingText.getAttribute("data-text")
    || "Pouya Brice Luxury Brand";



    let index = 0;



    typingText.innerHTML="";



    function typeWriter(){


        if(index < text.length){


            typingText.innerHTML += text.charAt(index);


            index++;


            setTimeout(
                typeWriter,
                100
            );


        }


    }



    typeWriter();


}




//==================================================
// CLOSE MENU ON OUTSIDE CLICK
//==================================================


document.addEventListener(
"click",
(e)=>{


    if(
        navLinks &&
        menuBtn &&
        !navLinks.contains(e.target) &&
        !menuBtn.contains(e.target)
    ){


        navLinks.classList.remove("active");


    }


});




//==================================================
// SMOOTH SCROLL
//==================================================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


    anchor.addEventListener(
    "click",
    function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }


    });


});




//==================================================
// CONSOLE BRAND
//==================================================


console.log(
`
================================
  HARF AKHAR V3
  Luxury UI
  By Pouya Brice
================================
`
);
