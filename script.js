const contactBtn = document.querySelector("#contact");
const endNavDiv = document.querySelector(".end-nav");

endNavDiv.style.right = "-280px";

contactBtn.addEventListener('click', () => {
    if (endNavDiv.style.right === "-280px") {
        endNavDiv.style.right = "0"
    } else {
        endNavDiv.style.right = "-280px";
    }
});


// gallery effects
const myGal1 = document.querySelector("#gallery1");

function closeGallery1 (){
    myGal1.style.gridColumn = "span 1"
    myGal1.style.height = "200px"
    
}
function closeGallery2 (){
    myGal2.style.gridColumn = "span 1"
    myGal2.style.height = "200px"
    
}
function closeGallery3 (){
    myGal3.style.gridColumn = "span 1"
    myGal3.style.height = "200px"
    
}
function closeGallery4 (){
    myGal4.style.gridColumn = "span 1"
    myGal4.style.height = "200px"
    
}

myGal1.style.gridColumn = "span 1"
myGal1.style.height = "200px"

myGal1.addEventListener('click', () => {

if(myGal1.style.gridColumn == "span 1" && myGal1.style.height=="200px" ){
        myGal1.style.gridColumn = "span 5"
        myGal1.style.height = "500px"
        closeGallery2();
        closeGallery3();
        closeGallery4();
    }else{
        myGal1.style.height = "200px"
        myGal1.style.gridColumn = "span 1"
    }
    
});
const myGal2 = document.querySelector("#gallery2");

myGal2.style.gridColumn = "span 1"
myGal2.style.height = "200px"

myGal2.addEventListener("click",()=>{
    if(myGal2.style.gridColumn == "span 1" && myGal2.style.height=="200px" ){
        myGal2.style.gridColumn = "span 5"
        myGal2.style.height = "500px"
        closeGallery1();
        closeGallery3();
        closeGallery4();
    }else{
        myGal2.style.height = "200px"
        myGal2.style.gridColumn = "span 1"
       
    }
})

const myGal3 = document.querySelector("#gallery3");

myGal3.style.gridColumn = "span 1"
myGal3.style.height = "200px"

myGal3.addEventListener("click",()=>{
    if(myGal3.style.gridColumn == "span 1" && myGal3.style.height=="200px" ){
        myGal3.style.gridColumn = "span 5"
        myGal3.style.height = "500px"
        closeGallery1();
        closeGallery2();
        closeGallery4();
    }else{
        myGal3.style.height = "200px"
        myGal3.style.gridColumn = "span 1"
       
    }
})

const myGal4 = document.querySelector("#gallery4");

myGal4.style.gridColumn = "span 1"
myGal4.style.height = "200px"

myGal4.addEventListener("click",()=>{
    if(myGal4.style.gridColumn == "span 1" && myGal4.style.height=="200px" ){
        myGal4.style.gridColumn = "span 5"
        myGal4.style.height = "500px"
        closeGallery1();
        closeGallery2();
        closeGallery3();
    }else{
        myGal4.style.height = "200px"
        myGal4.style.gridColumn = "span 1"
       
    }
})


