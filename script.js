const contactBtn = document.querySelector("#contact");
const endNavDiv = document.querySelector(".end-nav");

endNavDiv.style.right = "-280px";

contactBtn.addEventListener('click',()=>{
    if(endNavDiv.style.right === "-280px"){
        endNavDiv.style.right = "0"
    }else{
        endNavDiv.style.right = "-280px";
    }
})
