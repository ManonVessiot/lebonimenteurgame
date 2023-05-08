var Names = [];
const names_list_html = document.getElementById('names-list');

const nameInput = document.getElementById('nameImput');
nameInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("AddPlayerName").click();
  }
});

function BuildNamesList(){
    names_list_html.innerHTML = "";

    for (let pas = 0; pas < Names.length; pas++) {
        var element = Names[pas];
        names_list_html.innerHTML += " <button id=\"" + pas + "\" onclick=\"RemovePlayer(this.id)\">" + element + "</button>";
    }
}

function AddPlayer(){
    var name = nameInput.value;
    if (name == null || name.length ==0) return;

    nameInput.value = '';
    Names.push(name);
    BuildNamesList();
}

function RemovePlayer(_index){
    Names.splice(_index, 1);
    BuildNamesList();
}

