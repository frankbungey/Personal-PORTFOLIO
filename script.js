const contactBtn = document.querySelector("#contact");
const endNavDiv = document.querySelector(".end-nav");

endNavDiv.style.right = "-250px";

contactBtn.addEventListener('click', () => {
    if (endNavDiv.style.right === "-250px") {
        endNavDiv.style.right = "0"
    } else {
        endNavDiv.style.right = "-250px";
    }
});


// gallery effects

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
const myGal1 = document.querySelector("#gallery1");
const gal1Cont = document.querySelector('.gal1-inner-cont');

myGal1.style.gridColumn = "span 1"
myGal1.style.height = "200px"

myGal1.addEventListener('click', () => {
    if (myGal1.style.gridColumn == "span 1" && myGal1.style.height == "200px") {
        myGal1.style.gridColumn = "span 5"
        myGal1.style.height = "500px"
        gal1Cont.style.display = "block";
        closeGallery2();
        closeGallery3();
        closeGallery4();

    } else {
        myGal1.style.height = "200px"
        myGal1.style.gridColumn = "span 1"
        gal1Cont.style.display = "none";
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


// message
const messageBtn = document.getElementById("messagebtn");
const myName = document.getElementById("name");
const myEmail = document.getElementById("email");
const textArea = document.querySelector(".text");


messageBtn.addEventListener("click", () => {
    leaveMessage();
    if (myName.value == "") {
        throwErrorName();
        alert('Name Cant Be Empty')
    }
    else if (myEmail.value == "") {
        throwErrorEmail();
    }
    else if (textArea.value == "") {
        throwErrorText();
        alert('Please say something ..')
    }
    else {
        alert("Thank You...")
    }
    myName.value = "";
    myEmail.value = "";
    textArea.value = "";

    // location.reload();
    const local = localStorage;
    local.setItem('Clients-DATA',JSON.stringify(myEmail.value));

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

function leaveMessage() {
    const testimony = document.querySelector('.testimony');
    const testCont = document.createElement('div');
    testCont.classList.add('test-cont');

    const h3Name = document.createElement('h3');
    h3Name.innerText = `${myName.value}`

    const h4Email = document.createElement('h4');
    h4Email.innerText = `${myEmail.value}`

    const pMsg = document.createElement('p')
    pMsg.innerText = `${textArea.value}`

    testCont.appendChild(h3Name)
    testCont.appendChild(h4Email)
    testCont.appendChild(pMsg)

    testimony.appendChild(testCont)

}


// skill experience education
const cardSkill = document.querySelector('.cards');
const cardExperience = document.querySelector('.experience')
const cardEducation = document.querySelector('.education')

const skillBtn = document.getElementById("skills")
const experienceBtn = document.getElementById("experience")
const educationBtn = document.getElementById("education");



skillBtn.addEventListener('click', () => {
    cardSkill.style.display = "grid";
    cardEducation.style.display = "none"
    cardExperience.style.display = "none"

});

experienceBtn.addEventListener('click', () => {
    cardSkill.style.display = "none";
    cardEducation.style.display = "none"
    cardExperience.style.display = "block"

});

educationBtn.addEventListener('click', () => {
    cardSkill.style.display = "none";
    cardEducation.style.display = "block"
    cardExperience.style.display = "none"

});

