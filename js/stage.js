stage();

var stageNumber;
var name;
var race;

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
            
            $(inputNext).on('click', inputName, function() {name = inputName.value;})
            inputNext.addEventListener("click", nextStage);
        }
        if(stageNumber == 0.2) {
            text.innerHTML = "Choose a race for your character: <span class=\"less\">(Remember each race has different classes, choose soberly.)<span>";  
            choose.innerHTML = "";
            
            const inputHuman = document.createElement("input");
            const inputElf = document.createElement("input");
            const inputHalfElf = document.createElement("input");
            const inputBeastman = document.createElement("input");
            const inputOrc = document.createElement("input");
            
            inputHuman.setAttribute("type", "button");
            inputElf.setAttribute("type", "button");
            inputHalfElf.setAttribute("type", "button");
            inputBeastman.setAttribute("type", "button");
            inputOrc.setAttribute("type", "button");
            
            inputHuman.setAttribute("value", "Human");
            inputElf.setAttribute("value", "Elf");
            inputHalfElf.setAttribute("value", "Half Elf");
            inputBeastman.setAttribute("value", "Beastman");
            inputOrc.setAttribute("value", "Orc");

            choose.appendChild(inputHuman);
            choose.appendChild(inputElf);
            choose.appendChild(inputHalfElf);
            choose.appendChild(inputBeastman);
            choose.appendChild(inputOrc);
            
            inputHuman.addEventListener("click", function(){race = "Human"; nextStage();})
            inputElf.addEventListener("click", function(){race = "Elf"; nextStage();})
            inputHalfElf.addEventListener("click", function(){race = "Half Elf"; nextStage();})
            inputBeastman.addEventListener("click", function(){race = "Beastman"; nextStage();})
            inputOrc.addEventListener("click", function(){race = "Orc"; nextStage();})
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
    if (stageNumber == 0.2){
        $.ajax({
            type: "post",
            data: {loading : 1, stage: stageNumber, race: race},
            url: "php/stage.php"
        })
        .done(function(response) {
            stageNumber = response;
            setCharacterInformation();
            stage();
        })   
    }
}
