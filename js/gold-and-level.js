goldAndLevel();

function goldAndLevel() {
    const level = document.querySelector("#level");
    const gold = document.querySelector("#gold");
    
    $.ajax({
        type: "post",
        data: {},
        url: "php/gold-and-level.php"
    })
    .done(function(response) {
        let data = JSON.parse(response);
        
        level.innerHTML = "Level: " + data[0];
        gold.innerHTML = "Gold: " + data[1];
    })
};
