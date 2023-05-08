class Package {
    constructor(_name, _description, _themes, _themesNumber, _imageURL) {
        this.name = _name;
        this.description = _description;
        this.themes = _themes;
        this.themesNumber = _themesNumber;
        if (_imageURL == null) this.imageURL = "./assets/icones/question-mark.png"
        else this.imageURL = _imageURL;
    }

    get Name(){
        return this.name;
    }

    get Description(){
        return this.description;
    }

    Theme(_index){
        if (0 <= _index && _index < this.themesNumber){
            return this.themes[_index];
        }
        return null;
    }

    get ImageURL(){
        return this.imageURL;
    }
}

class PackageList {
    constructor(_packages, _packagesNumber) {
        this.packages = _packages;
        this.packagesNumber = _packagesNumber;
    }

    BuildPackageListHTML(){
        var listHTML = "";
        for (let pas = 0; pas < this.packagesNumber; pas++) {
            listHTML += "<button onClick=\"ChoosePackage(" + pas + ")\" class=\"package\">"+
                            "<div class=\"package-img\">"+
                                "<img src=\""+ packages[pas].ImageURL + "\" alt=\""+ packages[pas].Name + "\">"+
                            "</div>"+
                            "<div class=\"package-text\">"+
                                "<h2>"+ packages[pas].Name + "</h2>"+
                                "<div>"+
                                packages[pas].Description +
                                "</div>"+
                            "</div>"+
                        "</button>";
        }
        return listHTML;
    }
}

function SetLiarsNumber(_number){
    const liarsNumber_html = document.getElementById('liarsNumber');
    const number = Names.length - 1;
    var textHTML = "";
    if (number > 1){
        textHTML += "<div>" +
                        "<input type=\"range\" list=\"tickmarks\" id=\"liars\" name=\"liars\" min=\"1\" max=\"" + number + "\" value=\"1\">" +
                        "<datalist id=\"tickmarks\">";
    for (let pas = 1; pas <= number; pas++){
        textHTML += "<option value=\"" + pas + "\">" + pas + "</option>";
    }
    textHTML += "</datalist>" +
                "</div>" +
                "<label for=\"liars\">Menteur(s)</label>";
    }
    else{
        textHTML += "<label for=\"liars\">1 Menteur(s)</label>";
    }
    
    liarsNumber_html.innerHTML = textHTML;
}

const myThemes = [
    ["theme0", "theme1", "theme2"],
    ["theme0", "theme1", "theme2"],
    ["theme0", "theme1", "theme2"]
];
const packages = [
    new Package("Entre potes", "Soyez prêt à perdre des amis.", myThemes[0], myThemes[0].length, "./assets/icones/stupid.png"),
    new Package("Sérieux", "Abrutis d'abstenir.", myThemes[1], myThemes[1].length, "./assets/icones/brain.png"),
    new Package("Coquin", "Gros pervers va !", myThemes[2], myThemes[2].length, "./assets/icones/hot.png")
];

const package_list = new PackageList(packages, packages.length);
const package_list_html = document.getElementById('packages-list');
var LiarsNumber = 1;
if (package_list_html != null) package_list_html.innerHTML += package_list.BuildPackageListHTML();

var CurrentPackage = [];

function ChoosePackage(_index){
    CurrentPackage = [];
    packages[_index].themes.forEach(element => {
        CurrentPackage.push(element);
    });
    const liars_html = document.getElementById('liars');
    if (liars_html != null){
        LiarsNumber = liars_html.value;
    }
    else{
        LiarsNumber = 1;
    }
    OnPackageChoosen();
}