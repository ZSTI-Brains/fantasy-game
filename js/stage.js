stage();

var stageNumber;
var name;

function stage() {
    const text = document.querySelector("#text-container");
    const choose = document.querySelector("#choose-container");
    
    $.ajax({
        type: "post",
        data: {loading : 0},
        url: "php/stage.php"
    })
    .done(function(response) {
        console.log(response);
        stageNumber = response;
        if (stageNumber == 0.1) {
            text.innerHTML = "Choose a name for your character:";
            
            const inputName = document.createElement("input");
            const inputNext = document.createElement("input");
            
            inputName.setAttribute("type", "text");
            inputName.setAttribute("placeholder", "Name");
            
            inputNext.setAttribute("type", "button");
            inputNext.setAttribute("value", "Next");
            
            choose.appendChild(inputName);
            choose.appendChild(inputNext);

            name = inputName.value;
            inputNext.addEventListener("click", nextStage);
        }
        if(stageNumber == 0.2) {
            text.innerHTML = "Choose a race for your character:";  
            choose.innerHTML = "";
            
            const inputHuman = document.createElement("input");
            const inputElf = document.createElement("input");
            const inputHalfElf = document.createElement("input");
            const inputBeastman = document.createElement("input");
            
            inputHuman.setAttribute("type", "button");
            inputElf.setAttribute("type", "button");
            inputHalfElf.setAttribute("type", "button");
            inputBeastman.setAttribute("type", "button");
            
            inputHuman.setAttribute("value", "Human");
            inputElf.setAttribute("value", "Elf");
            inputHalfElf.setAttribute("value", "Half Elf");
            inputBeastman.setAttribute("value", "Beastman");

            choose.appendChild(inputHuman);
            choose.appendChild(inputElf);
            choose.appendChild(inputHalfElf);
            choose.appendChild(inputBeastman);
        }  
    })
};

function nextStage() {
    if (stageNumber == 0.1) {
        $.ajax({
            type: "post",
            data: {loading : 1, stage: stageNumber, name: name},
            url: "php/stage.php"
        })
        .done(function(response) {
            stageNumber = response;
            setCharacterInformation();
            stage();
        })
    }
}
