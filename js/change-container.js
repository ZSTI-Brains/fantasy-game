var basic = document.querySelector("#default"); 
var equipment = document.querySelector("#equipment-div"); 
var magic = document.querySelector("#magic-div");

var continueButton = document.querySelector("#continue");
var equipmentButton = document.querySelector("#equipment");
var magicButton = document.querySelector("#magic");

window.onload = start();

continueButton.addEventListener("click", function(){update(basic);});
equipmentButton.addEventListener("click", function(){update(equipment);});
magicButton.addEventListener("click", function(){update(magic);});

function start() {
    basic.style.display = "block";
    equipment.style.display = "none";
    magic.style.display = "none";
}

function update(name) {
    basic.style.display = "none";
    equipment.style.display = "none";
    magic.style.display = "none";

    name.style.display = "block";
}