var CurrentTheme = null;
var CurrentLiars = [];
var OthersNames = [];
var CurrentName = -1;
var ShowingName = true;
const GameText = document.getElementById('GameText');

const nextGame = document.getElementById('nextGame');
const restartGame = document.getElementById('restartGame');

function InitializeGame(){
    CurrentTheme = CurrentPackage[Math.floor(Math.random() * CurrentPackage.length)];
    const index = CurrentPackage.indexOf(CurrentTheme);
    if (index > -1) {
        CurrentPackage.splice(index, 1);
    }
    CurrentLiar = [];
    OthersNames = [];
    Names.forEach(element => {
        OthersNames.push(element);
    });

    console.debug("LiarsNumber : " + LiarsNumber);
    for (var i = 0; i < LiarsNumber; i++){
        var liarIndex = Math.floor(Math.random() * OthersNames.length)
        CurrentLiar.push(OthersNames[liarIndex]);
        OthersNames.splice(liarIndex, 1);
    }

    CurrentLiar.forEach(element => {
        console.debug("CurrentLiar : " + element);
    });
    OthersNames.forEach(element => {
        console.debug("OthersNames : " + element);
    });
    
    CurrentName = 0;
    GameText.innerHTML = Names[CurrentName];
    
    ShowingName = true;
    nextGame.style.display = "block";
    if (CurrentPackage.length == 0){
        restartGame.style.display = "none";
    }
    else{
        restartGame.style.display = "block";
    }
}

function GameNext(){
    if (CurrentName >= Names.length) return;
    // TODO : Check here
    if (ShowingName){
        if (CurrentLiars.includes(Names[CurrentName])){
            GameText.innerHTML = "Menteur";
        }
        else{
            GameText.innerHTML = CurrentTheme;
        }
        ShowingName = false;
    }
    else{
        CurrentName++;
        if (CurrentName < Names.length){
            GameText.innerHTML = Names[CurrentName];
            ShowingName = true;
        }
        else{
            GameText.innerHTML = "À vous de jouer !";
            nextGame.style.display = "none";
        }
    }
}