function copyText(button){
let text = button.parentElement.querySelector("p").innerText;
navigator.clipboard.writeText(text);
button.innerText="کپی شد ✓";
setTimeout(()=>{
button.innerText="کپی متن";
},2000);
}
