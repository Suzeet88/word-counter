let textarea=document.getElementById("textarea");
let wordcount=document.getElementById("word");
let charcount=document.getElementById("char");

textarea.addEventListener("input",function(){
    charcount.textContent= textarea.value.length;
    let text=textarea.value.trim();
     wordcount.textContent = text.split(" ").filter((item) =>item).length;
});
