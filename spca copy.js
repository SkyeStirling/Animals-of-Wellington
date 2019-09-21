var kakarikiToggle = 0;
var tuataraToggle = 0;
var kakaToggle = 0;
var wetaToggle = 0;
var takaheToggle = 0;

document.getElementById('kakariki').onclick = function changeContent() {
    if (kakarikiToggle == 0){
        document.getElementById('kakarikiDisc').style.opacity = "1";
        kakarikiToggle = 1;
        console.log("On");
    } else {
        document.getElementById('kakarikiDisc').style.opacity = "0";
        kakarikiToggle = 0;
        console.log("Off");
    }
}

document.getElementById('tuatara').onclick = function changeContent() {
    if (tuataraToggle == 0){
        document.getElementById('tuataraDisc').style.opacity = "1";
        tuataraToggle = 1;
        console.log("On");
    } else {
        document.getElementById('tuataraDisc').style.opacity = "0";
        tuataraToggle = 0;
        console.log("Off");
    }
}

document.getElementById('kaka').onclick = function changeContent() {
    if (kakaToggle == 0){
        document.getElementById('kakaDisc').style.opacity = "1";
        kakaToggle = 1;
        console.log("On");
    } else {
        document.getElementById('kakaDisc').style.opacity = "0";
        kakaToggle = 0;
        console.log("Off");
    }
}


document.getElementById('weta').onclick = function changeContent() {
    if (wetaToggle == 0){
        document.getElementById('wetaDisc').style.opacity = "1";
        wetaToggle = 1;
        console.log("On");
    } else {
        document.getElementById('wetaDisc').style.opacity = "0";
        wetaToggle = 0;
        console.log("Off");
    }
}


document.getElementById('takahe').onclick = function changeContent() {
    if (takaheToggle == 0){
        document.getElementById('takaheDisc').style.opacity = "1";
        takaheToggle = 1;
        console.log("On");
    } else {
        document.getElementById('takaheDisc').style.opacity = "0";
        takaheToggle = 0;
        console.log("Off");
    }
}


