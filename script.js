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

function closeGallery1() {
    myGal1.style.gridColumn = "span 1"
    myGal1.style.height = "200px"

}
function closeGallery2() {
    myGal2.style.gridColumn = "span 1"
    myGal2.style.height = "200px"

}
function closeGallery3() {
    myGal3.style.gridColumn = "span 1"
    myGal3.style.height = "200px"

}
function closeGallery4() {
    myGal4.style.gridColumn = "span 1"
    myGal4.style.height = "200px"

}

myGal1.style.gridColumn = "span 1"
myGal1.style.height = "200px"

myGal1.addEventListener('click', () => {

    if (myGal1.style.gridColumn == "span 1" && myGal1.style.height == "200px") {
        myGal1.style.gridColumn = "span 5"
        myGal1.style.height = "500px"
        closeGallery2();
        closeGallery3();
        closeGallery4();
        galInnerContent.style.display = "block";
    } else {
        myGal1.style.height = "200px"
        myGal1.style.gridColumn = "span 1"
        galInnerContent.style.display = "none";
    }

});
const myGal2 = document.querySelector("#gallery2");

myGal2.style.gridColumn = "span 1"
myGal2.style.height = "200px"

myGal2.addEventListener("click", () => {
    if (myGal2.style.gridColumn == "span 1" && myGal2.style.height == "200px") {
        myGal2.style.gridColumn = "span 5"
        myGal2.style.height = "500px"
        closeGallery1();
        closeGallery3();
        closeGallery4();
    } else {
        myGal2.style.height = "200px"
        myGal2.style.gridColumn = "span 1"

    }
})

const myGal3 = document.querySelector("#gallery3");

myGal3.style.gridColumn = "span 1"
myGal3.style.height = "200px"

myGal3.addEventListener("click", () => {
    if (myGal3.style.gridColumn == "span 1" && myGal3.style.height == "200px") {
        myGal3.style.gridColumn = "span 5"
        myGal3.style.height = "500px"
        closeGallery1();
        closeGallery2();
        closeGallery4();
    } else {
        myGal3.style.height = "200px"
        myGal3.style.gridColumn = "span 1"

    }
})

const myGal4 = document.querySelector("#gallery4");

myGal4.style.gridColumn = "span 1"
myGal4.style.height = "200px"

myGal4.addEventListener("click", () => {
    if (myGal4.style.gridColumn == "span 1" && myGal4.style.height == "200px") {
        myGal4.style.gridColumn = "span 5"
        myGal4.style.height = "500px"
        closeGallery1();
        closeGallery2();
        closeGallery3();
    } else {
        myGal4.style.height = "200px"
        myGal4.style.gridColumn = "span 1"

    }
})

const galInnerContent = document.createElement('div');
galInnerContent.classList.add('.gal1-inner-cont');

const h1Tag = document.createElement('h1');
const pTag = document.createElement('p');

galInnerContent.appendChild(h1Tag);
galInnerContent.appendChild(pTag);
myGal1.appendChild(galInnerContent);

// message
const messageBtn = document.getElementById("messagebtn");
const myName = document.getElementById("name");
const myEmail = document.getElementById("email");
const textArea = document.querySelector(".text");

messageBtn.addEventListener("click", () => {
if(myName.value == ""){
    throwErrorName();
    alert('Name Cant Be Empty')
}
else if(myEmail.value == ""){
    throwErrorEmail();
}
else if(textArea.value == ""){
    throwErrorText();
    alert('Please say something ..')
}
else{
    alert("Thank You...")
}
myName.value = "";
myEmail.value = "";
textArea.value = "";

location.reload();
});

function throwErrorName() {
    myName.style.color = "red"
    myName.style.border = "2px solid red"
}
function throwErrorEmail() {
    myEmail.style.color = "red"
    myEmail.style.border = "2px solid red"
}
function throwErrorText() {
   textArea.style.color = "red"
   textArea.style.border = "2px solid red"
}
// skill experience education
const cardSkill = document.querySelector('.cards');
const cardExperience = document.querySelector('.experience')
const cardEducation = document.querySelector('.education')

const skillBtn = document.getElementById("skills")
const experienceBtn = document.getElementById("experience")
const educationBtn = document.getElementById("education");



skillBtn.addEventListener('click',()=>{
    cardSkill.style.display = "grid";
   cardEducation.style.display = "none"
   cardExperience.style.display = "none"
   skillBtn.style.textDecoration = "underline"
});

experienceBtn.addEventListener('click',()=>{
   cardSkill.style.display = "none";
   cardEducation.style.display = "none"
   cardExperience.style.display = "block"
   experienceBtn.style.textDecoration = "underline"
});

educationBtn.addEventListener('click',()=>{
    cardSkill.style.display = "none";
   cardEducation.style.display = "block"
   cardExperience.style.display = "none"
   educationBtn.style.textDecoration = "underline"
});



// work
const nameOne = document.getElementById("nameOne")
const emailOne = document.getElementById("emailWork")
const textWork = document.getElementById("textWork")
const workBtn = document.getElementById("workbtn");

 workBtn.addEventListener(("click"),()=>{

     if(nameOne.value == ""){
        alert("Name Cant Be Empty!");
        throwErrorNameOne()
     }
     else if(emailOne.value == ""){
        throwErrorEmailOne();
    }
    else if(textWork.value == ""){
        throwErrorTextWork();
        alert("Describe Your Work..")
    }
    else{
        alert("Thank You.. For Now Click The contact btn to reach me.")
    }

    nameOne.value = ""
    emailOne.value = ""
    textWork.value = ""

    location.reload();
});

function throwErrorNameOne(){
    nameOne.style.color = "red"
    nameOne.style.border = "2px solid red"
}
function throwErrorEmailOne(){
    emailOne.style.color = "red"
    emailOne.style.border = "2px solid red"
}
function throwErrorTextWork(){
    textWork.style.color = "red"
    textWork.style.border = "2px solid red"
}