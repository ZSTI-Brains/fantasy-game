stageOne();

function stageOne() {
    const text = document.querySelector("#text-container");
    const choose = document.querySelector("#choose-container");
    $.ajax({
        type: "post",
        data: {loading : 0},
        url: "php/stage.php"
    })
    .done(function(response) {
        stageNumber = response;
        if (stageNumber == 1) {
            text.innerHTML = "Fabuła, ciąg dalszy nastąpi.";
            choose.innerHTML = "";
        }
    })
    
}