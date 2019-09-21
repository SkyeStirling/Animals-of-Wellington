

// Add javascript read first


var zebraToggle = 0;
var tigerToggle = 0;
var elephantToggle = 0;
var giraffeToggle = 0;
var chameleonToggle = 0;

document.getElementById('zebra').onclick = function changeContent() {
    if (zebraToggle == 0){
        document.getElementById('zebraDisc').style.opacity = "1";
        zebraToggle = 1;
        console.log("On");
    } else {
        document.getElementById('zebraDisc').style.opacity = "0";
        zebraToggle = 0;
        console.log("Off");
    }
}

document.getElementById('tiger').onclick = function changeContent() {
    if (tigerToggle == 0){
        document.getElementById('tigerDisc').style.opacity = "1";
        tigerToggle = 1;
        console.log("On");
    } else {
        document.getElementById('tigerDisc').style.opacity = "0";
        tigerToggle = 0;
        console.log("Off");
    }
}

document.getElementById('elephant').onclick = function changeContent() {
    if (elephantToggle == 0){
        document.getElementById('elephantDisc').style.opacity = "1";
        elephantToggle = 1;
        console.log("On");
    } else {
        document.getElementById('elephantDisc').style.opacity = "0";
        elephantToggle = 0;
        console.log("Off");
    }
}


document.getElementById('giraffe').onclick = function changeContent() {
    if (giraffeToggle == 0){
        document.getElementById('giraffeDisc').style.opacity = "1";
        giraffeToggle = 1;
        console.log("On");
    } else {
        document.getElementById('giraffeDisc').style.opacity = "0";
        giraffeToggle = 0;
        console.log("Off");
    }
}


document.getElementById('chameleon').onclick = function changeContent() {
    if (chameleonToggle == 0){
        document.getElementById('chameleonDisc').style.opacity = "1";
        chameleonToggle = 1;
        console.log("On");
    } else {
        document.getElementById('chameleonDisc').style.opacity = "0";
        chameleonToggle = 0;
        console.log("Off");
    }
}


