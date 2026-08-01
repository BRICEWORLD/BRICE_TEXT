/*==================================================
HARF AKHAR V5
Main JavaScript
By Pouya Brice
==================================================*/


// ===============================
// Quotes Database
// ===============================


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
category:"love",
text:"بعضی آدم‌ها شبیه خانه‌اند؛ هر بار که به آن‌ها برمی‌گردی، آرام می‌شوی."
},


{
id:4,
category:"love",
text:"اگر قرار باشد دوباره زندگی کنم، باز هم همان راهی را می‌روم که به تو برسد."
},


{
id:5,
category:"love",
text:"زیباترین احساس دنیا این است که کسی بی‌دلیل دوستت داشته باشد."
},


{
id:6,
category:"love",
text:"گاهی سکوت، عاشقانه‌ترین جمله‌ای است که بین دو قلب رد و بدل می‌شود."
},


{
id:7,
category:"love",
text:"خوشبختی همیشه بزرگ نیست؛ گاهی در یک نگاه، یک لبخند یا یک پیام ساده پنهان شده است."
},


{
id:8,
category:"love",
text:"بعضی خاطره‌ها هیچ‌وقت قدیمی نمی‌شوند؛ چون در قلب زندگی می‌کنند."
},


{
id:9,
category:"love",
text:"هر روزی که کنار آدم درست باشی، یک روز از عمرت را واقعاً زندگی کرده‌ای."
},


{
id:10,
category:"love",
text:"عشق یعنی کنار کسی باشی که حضورت، آرامش او باشد."
},


{
id:11,
category:"love",
text:"گاهی ارزش یک نفر را فقط قلب می‌فهمد، نه عقل."
},


{
id:12,
category:"love",
text:"بهترین هدیه زندگی، داشتن کسی است که با او خود واقعی‌ات باشی."
},


{
id:13,
category:"love",
text:"هیچ فاصله‌ای نمی‌تواند قلب‌هایی را که واقعاً به هم تعلق دارند، از هم جدا کند."
},


{
id:14,
category:"love",
text:"بعضی آدم‌ها دلیل لبخندهایی هستند که حتی خودت هم متوجهشان نمی‌شوی."
},


  // ===============================
// Sad Quotes
// ===============================


{
id:15,
category:"sad",
text:"گاهی یک لبخند ساده می‌تواند روزی را نجات دهد که همه چیز در آن سخت به نظر می‌رسد."
},


{
id:16,
category:"sad",
text:"زندگی کوتاه‌تر از آن است که صرف کینه و حسرت شود."
},


{
id:17,
category:"sad",
text:"هر انسانی داستانی دارد که دیگران از آن خبر ندارند؛ مهربان باش."
},


{
id:18,
category:"sad",
text:"گاهی یک جمله می‌تواند امیدی را زنده کند که سال‌ها خاموش بوده است."
},


{
id:19,
category:"sad",
text:"اگر امروز سخت گذشت، به این معنا نیست که فردا هم همین‌گونه خواهد بود."
},


{
id:20,
category:"sad",
text:"گاهی باید بعضی آدم‌ها را رها کرد تا خودت را دوباره پیدا کنی."
},


{
id:21,
category:"sad",
text:"قلبی که امید دارد، هیچ‌وقت واقعاً شکست نمی‌خورد."
},


{
id:22,
category:"sad",
text:"زیباترین روزهای زندگی، هنوز نیامده‌اند."
},


{
id:23,
category:"sad",
text:"هر بار که می‌بخشی، قبل از دیگران خودت آزاد می‌شوی."
},


{
id:24,
category:"sad",
text:"بعضی آرزوها دیر می‌رسند، اما ارزش انتظار را دارند."
},


// ===============================
// Dark Quotes
// ===============================


{
id:25,
category:"dark",
text:"گاهی سکوت، بلندترین پاسخی است که می‌توان داد."
},


{
id:26,   // ===============================
// Continue Dark Quotes
// ===============================


{
id:32,
category:"dark",
text:"هیچ‌کس نمی‌تواند آینده‌ات را بسازد، مگر خودت."
},


{
id:33,
category:"dark",
text:"هر قدم کوچک، تو را به رؤیاهایت نزدیک‌تر می‌کند."
},


{
id:34,
category:"dark",
text:"گاهی شکست، بهترین معلم موفقیت است."
},


{
id:35,
category:"dark",
text:"زندگی مسابقه با دیگران نیست؛ مسابقه با دیروز خودت است."
},


{
id:36,
category:"dark",
text:"امروز کاری را انجام بده که فردای تو به آن افتخار کند."
},


// ===============================
// Life Quotes
// ===============================


{
id:37,
category:"life",
text:"هر طلوع، یادآوری این است که هنوز فرصت شروع دوباره وجود دارد."
},


{
id:38,
category:"life",
text:"گاهی آرام‌ترین آدم‌ها، بزرگ‌ترین طوفان‌ها را پشت سر گذاشته‌اند."
},


{
id:39,
category:"life",
text:"آرامش، ارزشمندترین ثروتی است که می‌توان به دست آورد."
},


{
id:40,
category:"life",
text:"همیشه برای یاد گرفتن، فرصت وجود دارد."
},


{
id:41,
category:"life",
text:"زندگی از تصمیم‌های کوچک ساخته می‌شود، نه اتفاق‌های بزرگ."
},


{
id:42,
category:"life",
text:"کسی که خودش را باور دارد، از شکست نمی‌ترسد."
},


{
id:43,
category:"life",
text:"هر سختی، تو را برای موفقیتی بزرگ‌تر آماده می‌کند."
},


{
id:44,
category:"life",
text:"گاهی باید از منطقه امن خود خارج شوی تا رشد کنی."
},


{
id:45,
category:"life",
text:"آرامش واقعی زمانی به دست می‌آید که خودت را همان‌گونه که هستی بپذیری."
},


{
id:46,
category:"life",
text:"گذشته را نمی‌توان تغییر داد، اما آینده هنوز نوشته نشده است."
},


{
id:47,
category:"life",
text:"هر روز یک فرصت تازه برای بهتر شدن است."
},


{
id:48,
category:"life",
text:"بعضی آدم‌ها با حضورشان دنیا را زیباتر می‌کنند."
},


{
id:49,
category:"life",
text:"صبور باش؛ بهترین اتفاق‌ها معمولاً دیرتر می‌رسند."
},


{
id:50,
category:"life",
text:"قلبی که امید دارد، هیچ‌وقت تنها نیست."
},



  // ===============================
// Night Quotes
// ===============================


{
id:51,
category:"night",
text:"شب به ما یاد می‌دهد که بعد از هر تاریکی، نوبت روشنایی می‌رسد."
},


{
id:52,
category:"night",
text:"گاهی سکوت شب بهترین دوست کسی است که روز سختی را پشت سر گذاشته."
},


{
id:53,
category:"night",
text:"هیچ شبی آن‌قدر طولانی نیست که صبح را فراموش کند."
},


{
id:54,
category:"night",
text:"در آرامش شب، گاهی جواب سوال‌هایی را پیدا می‌کنیم که روزها دنبالش بودیم."
},


{
id:55,
category:"night",
text:"ستاره‌ها یادمان می‌دهند حتی در تاریکی هم می‌توان درخشید."
},


// ===============================
// Motivation Quotes
// ===============================


{
id:56,
category:"motivation",
text:"هیچ موفقیتی بدون صبر و تلاش ماندگار نخواهد بود."
},


{
id:57,
category:"motivation",
text:"موفقیت از لحظه‌ای شروع می‌شود که بهانه‌ها تمام می‌شوند."
},


{
id:58,
category:"motivation",
text:"موفقیت یعنی هر روز یک قدم از دیروز جلوتر باشی."
},


{
id:59,
category:"motivation",
text:"اگر امروز قدمی برداری، فردا به هدفت نزدیک‌تر خواهی بود."
},


{
id:60,
category:"motivation",
text:"موفقیت نصیب کسانی می‌شود که دست از تلاش برنمی‌دارند."
},


{
id:61,
category:"motivation",
text:"به خودت ایمان داشته باش؛ بزرگ‌ترین حامی تو، خودت هستی."
},


{
id:62,
category:"motivation",
text:"هر پایان، شروع فصل جدیدی از زندگی است."
},


{
id:63,
category:"motivation",
text:"زندگی کوتاه‌تر از آن است که با ترس زندگی کنی."
},


{
id:64,
category:"motivation",
text:"امید، زیباترین هدیه‌ای است که می‌توان هر روز به خودت بدهی."
},


{
id:65,
category:"motivation",
text:"گاهی یک تصمیم کوچک، مسیر تمام زندگی را تغییر می‌دهد."
},


{
id:66,
category:"motivation",
text:"زیباترین اتفاق‌ها زمانی می‌رسند که انتظارش را نداری."
},


{
id:67,
category:"motivation",
text:"خودت را با دیگران مقایسه نکن؛ هر انسانی مسیر مخصوص خودش را دارد."
},


{
id:68,
category:"motivation",
text:"اگر باور داشته باشی، غیرممکن‌ها هم کم‌کم ممکن می‌شوند."
},


{
id:69,
category:"motivation",
text:"بعضی رویاها فقط منتظر اولین قدم تو هستند."
},


{
id:70,
category:"motivation",
text:"امروز بهترین زمان برای شروع کاری است که مدت‌ها به تعویق انداخته‌ای."
},



  // ===============================
// More Motivation Quotes
// ===============================


{
id:71,
category:"motivation",
text:"هر تجربه، حتی اگر تلخ باشد، درسی برای آینده دارد."
},


{
id:72,
category:"motivation",
text:"گاهی باید بیشتر از آنکه حرف بزنی، عمل کنی."
},


{
id:73,
category:"motivation",
text:"ثروت واقعی، آرامش و سلامتی است."
},


{
id:74,
category:"motivation",
text:"بهترین سرمایه‌گذاری، سرمایه‌گذاری روی خودت است."
},


{
id:75,
category:"motivation",
text:"هیچ انسانی با یک شکست، بازنده نمی‌شود؛ با تسلیم شدن بازنده می‌شود."
},


{
id:76,
category:"motivation",
text:"لبخندت را حفظ کن؛ دنیا به آدم‌های امیدوار بیشتر نیاز دارد."
},


{
id:77,
category:"motivation",
text:"گاهی یک تغییر کوچک، آغاز بزرگ‌ترین موفقیت‌هاست."
},


{
id:78,
category:"motivation",
text:"زندگی برای کسانی زیباست که امید را فراموش نمی‌کنند."
},


{
id:79,
category:"motivation",
text:"هر روز فرصتی تازه برای ساختن آینده‌ای بهتر است."
},


{
id:80,
category:"motivation",
text:"آدم‌های موفق، بیشتر از دیگران تلاش کرده‌اند، نه بیشتر از دیگران خوش‌شانس بوده‌اند."
},


{
id:81,
category:"motivation",
text:"اگر هدفت روشن باشد، مسیرت را پیدا خواهی کرد."
},


{
id:82,
category:"motivation",
text:"بهترین نسخه خودت باش، نه کپی دیگران."
},


{
id:83,
category:"motivation",
text:"گاهی باید از نو شروع کنی تا به جای درست برسی."
},


{
id:84,
category:"motivation",
text:"موفقیت با قدم‌های کوچک اما مداوم ساخته می‌شود."
},


{
id:85,
category:"motivation",
text:"هیچ رؤیایی برای کسی که تلاش می‌کند، دور از دسترس نیست."
},


{
id:86,
category:"life",
text:"آرامش از درون آغاز می‌شود، نه از شرایط بیرونی."
},


{
id:87,
category:"life",
text:"زندگی همیشه فرصت دوباره می‌دهد؛ اسمش فرداست."
},


{
id:88,
category:"life",
text:"هر روزی که یاد می‌گیری، روزی است که رشد می‌کنی."
},


{
id:89,
category:"life",
text:"به خودت افتخار کن؛ تا اینجا هم مسیر طولانی‌ای را پشت سر گذاشته‌ای."
},



]; // ===============================
// Elements
// ===============================


const quotesContainer = document.getElementById("quotesContainer");

const searchInput = document.getElementById("searchInput");

const randomQuote = document.getElementById("randomQuote");

const newQuoteBtn = document.getElementById("newQuoteBtn");

const copyRandomBtn = document.getElementById("copyRandomBtn");

const shareRandomBtn = document.getElementById("shareRandomBtn");

const categoryButtons = document.querySelectorAll(".category-card");



// Current category

let currentCategory = "all";




// ===============================
// Create Quote Cards
// ===============================


function displayQuotes(list){


if(!quotesContainer) return;


quotesContainer.innerHTML="";



if(list.length === 0){


quotesContainer.innerHTML = `

<div class="no-result">

متنی پیدا نشد 😔

</div>

`;


return;

}




list.forEach(quote=>{


const card = document.createElement("div");

card.className="quote-card";



card.innerHTML = `

<p class="quote-text">

${quote.text}

</p>


<button class="copy-btn">

📋 کپی متن

</button>

`;




const copyBtn = card.querySelector(".copy-btn");



copyBtn.addEventListener("click",()=>{


copyText(quote.text);


copyBtn.innerText="✅ کپی شد";


setTimeout(()=>{

copyBtn.innerText="📋 کپی متن";

},1500);



});




quotesContainer.appendChild(card);



});



}



// نمایش اولیه

displayQuotes(quotes);  // ===============================
// Search System
// ===============================


if(searchInput){


searchInput.addEventListener("input",()=>{


const value = searchInput.value.trim().toLowerCase();



const filtered = quotes.filter(quote=>{


const matchText = quote.text.toLowerCase().includes(value);


const matchCategory = 
currentCategory === "all" ||
quote.category === currentCategory;



return matchText && matchCategory;


});



displayQuotes(filtered);



});


}






// ===============================
// Category Filter
// ===============================


categoryButtons.forEach(button=>{


button.addEventListener("click",()=>{



categoryButtons.forEach(btn=>{

btn.classList.remove("active");

});



button.classList.add("active");



currentCategory = button.dataset.category;



const filtered = quotes.filter(quote=>{


return currentCategory === "all" ||

quote.category === currentCategory;


});



displayQuotes(filtered);



});


});







// ===============================
// Random Quote
// ===============================


function showRandomQuote(){


const random = 
quotes[Math.floor(Math.random()*quotes.length)];



if(randomQuote){


randomQuote.innerText = random.text;


randomQuote.dataset.text = random.text;


}



}




if(newQuoteBtn){


newQuoteBtn.addEventListener("click",showRandomQuote);


}







// ===============================
// Copy Function
// ===============================


function copyText(text){


navigator.clipboard.writeText(text)

.then(()=>{


console.log("Copied");


})


.catch(()=>{


alert("کپی انجام نشد");


});


}






// Copy Random Quote


if(copyRandomBtn){


copyRandomBtn.addEventListener("click",()=>{


const   // ===============================
// Share Random Quote
// ===============================


if(shareRandomBtn){


shareRandomBtn.addEventListener("click",()=>{


const text = randomQuote.dataset.text;



if(!text) return;



if(navigator.share){


navigator.share({

title:"حرف آخر",

text:text,

});


}

else{


copyText(text);


alert("متن کپی شد؛ می‌توانید آن را ارسال کنید.");


}



});


}






// ===============================
// Mobile Menu
// ===============================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



if(menuBtn && navLinks){


menuBtn.addEventListener("click",()=>{


navLinks.classList.toggle("active");


});



document.querySelectorAll(".nav-links a")

.forEach(link=>{


link.addEventListener("click",()=>{


navLinks.classList.remove("active");


});


});


}






// ===============================
// Loader
// ===============================


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


const loader = document.getElementById("loader");



if(loader){


setTimeout(()=>{


loader.style.display="none";


},700);


}


});







// ===============================
// Back To Top
// ===============================


const backTop = document.getElementById("backTop");



window.addEventListener("scroll",()=>{


if(!backTop) return;



if(window.scrollY > 500){


backTop.style.display="block";


}

else{


backTop.style.display="none";


}



});




if(backTop){


backTop.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}
