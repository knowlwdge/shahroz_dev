const charval = document.getElementById("textarea");
let totalcont=document.getElementById("total-counter");
let remainingcount=document.getElementById("renamecont");

let char=0;
const udpatecounter =() =>{
userchar = charval.value.length;
// alert(char);
totalcont.innerText = userchar; 
remainingcount.innerText = 150-userchar;

};
charval.addEventListener("keyup" , () => udpatecounter() );
// copy text code
const copytext = ()=>{
charval.select();
charval.setSelectionRange(0,9999); // mobile vargion
navigator.clipboard.writeText(charval.value);
};