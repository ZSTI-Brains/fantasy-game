stage();

var inforamtion = document.querySelector("input[type=text]");
var next = document.querySelector("input[value=Next]");
var stageNumber;

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
            //choose.innerHTML = "";
        }
    })
};

next.addEventListener("click", nextStage);

function nextStage() {
    if (stageNumber == 0.1) {
        var name = inforamtion.value;
        $.ajax({
            type: "post",
            data: {loading : 1, stage: stageNumber, name: name},
            url: "php/stage.php"
        })
        .done(function(response) {
            console.log(response);
            stageNumber = response;
            setCharacterInformation();
        })
        .fail(function() {
            alert("error");
        })
    }
    //console.log(stageNumber);
}
