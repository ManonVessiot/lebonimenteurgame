// use Names[] from Names.js
const RulesHTML = document.getElementById('rules');
const NamesHTML = document.getElementById('names');
const PackagesHTML = document.getElementById('packages');
const GameHTML = document.getElementById('game');

var currentPage = 0;

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" || event.key === "Esc" || event.key === "GoBack") {
      event.preventDefault();
      Back();
    }
  });

function OnInitialize(){
    RulesHTML.style.display = "block";
    NamesHTML.style.display = "none";
    PackagesHTML.style.display = "none";
    GameHTML.style.display = "none";
    currentPage = 0;
    InitializeRules();
}

function OnRulesQuit(){
    RulesHTML.style.display = "none";
    NamesHTML.style.display = "block";
    currentPage = 1;
}

function OnNamesGiven(){
    if (Names != null && Names.length >=2){
        NamesHTML.style.display = "none";
        PackagesHTML.style.display = "block";
        currentPage = 2;
        SetLiarsNumber(Names.length);
    }
}

function OnPackageChoosen(){
    PackagesHTML.style.display = "none";
    GameHTML.style.display = "block";
    currentPage = 3;
    InitializeGame();
}

function Back(){
    if (currentPage == 3){
        PackagesHTML.style.display = "block";
        GameHTML.style.display = "none";
    }
    else if (currentPage == 2){
        NamesHTML.style.display = "block";
        PackagesHTML.style.display = "none";
    }
    else if (currentPage == 1){
        RulesHTML.style.display = "block";
        NamesHTML.style.display = "none";
        InitializeRules();
    }
    currentPage--;
}

OnInitialize();