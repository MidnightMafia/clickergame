var score = 0;
var clickingPower = 1;

function addtoscore(amount) {
	score = score + (amount);
	document.getElementById("score").innerHTML = score; //updates score
    }


 // saving
function savegame() {
    var savegame = {
    score: score
}
    localStorage.score = document.getElementById("score");
    localStorage.setItem('score', score);
    document.getElementById("score");
}

//loading
window.onload = function loadgame() {
    localStorage.getItem('score', score);
    document.getElementById("score").localStorage;
}
    

setInterval (function() {
    savegame();
}, 5000); // 5 sec
