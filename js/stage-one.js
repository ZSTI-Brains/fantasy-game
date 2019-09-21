stageOne();
var i = 0;
var j = 0;
var word;

function stageOne() {
    const text   = document.querySelector("#text-container");
    const choose = document.querySelector("#choose-container");
    $.ajax({
        type: "post",
        data: {loading : 0},
        url: "php/stage.php"
    })
    .done(function(response) {
        stageNumber = response;
        if (stageNumber == 1) {
            setInterval(refresch, 50);
            choose.innerHTML = "";
        }
    })   
}

function refresch() {
    const text = document.querySelector("#text-container");
    var t = "Muszę wypełnić text bardzo dużą ilością znaków, więc powiele to zdanie kilka razy a może więcej, ale poucinam słowa. Muszę text bardzo dużą ilością znaków, więc powiele to zdanie kilka razy. Muszę wypełnić text dużą ilością znaków, więc powiele to zdanie kilka razy. Muszę wypełnić bardzo dużą ilością znaków, więc powiele to zdanie kilka razy. Muszę wypełnić text bardzo dużą ilością znaków, więc to zdanie kilka razy.";
    
    let storyText = document.createElement("div");
    let storyTextSpace = document.createElement("div");
    if (i == 0 || t[i] == " ") {
        word = document.createElement("div");
        word.className = "storyText";
    }
    
    storyText.className = "storyText";
    storyText.innerText = t[i];
    
    storyTextSpace.className = "storyTextSpace";
    storyTextSpace.innerText = " ";
    
    if (t[i] != undefined) { 
        if (i == 0) {
            text.appendChild(word);
        }
        if (t[i] == " ") {
            word.appendChild(storyTextSpace);
            text.appendChild(word);
        }
        word.appendChild(storyText);
    }
    i++;
}