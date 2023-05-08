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
    ["monokini", "l'adultère", "mentir", "facebook", "instagram", "twitter", "les placements de produits", "la colocation", "tiktok", "les caricatures", "tinder", 
    "claquette chaussettes", "baisser l'abattant des wc", "la télé-réalité", "le salaire des footbaleurs", "les films 3D", "le popcorn salé", "dire chocolatine", "les gilet jaunes", 
    "le saut à l'élastique", "écrire des lettres", "la polygamie", "le réchauffement climatique", "péter devant son/sa partenaire", "les poils", "le nudisme", "boire du vin à table", 
    "les croisière en bateau", "les régimes", "le nutella", "les camping car", "la bombe nucléaire", "les caméras de surveillance", "les fastfood", "le BDSM", "les voyages spaciaux", 
    "le rap", "la musique classique", "les crocs", "les apéro-dinatoire", "l'ananas sur la pizza", "l'indépendance de la corse", "le theoreme de pytagore", "le darknet", 
    "la circonsition", "le bizutage", "les strings", "tricher au bac", "le camping", "le fromage de chêvre", "les roumains", "beurre demi sel", "le maquillage", 
    "les auberges de jeunesse", "les livres audio", "les piles rechargeables", "les trottinettes électriques", "savoir quand tu vas mourir", "savoir comment tu vas mourir", 
    "rire de tout", "les percings", "les tatouages", "toilettes japonaises", "toilettes turcs", "toilettes sèches", "le slip", "le moule bite sur la plage", "les assistants vocaux", 
    "pipi sous la douche", "le naturisme", "Apple (iOS)", "la cuisine au micro-onde", "Dormir avec des chaussettes", "Manger ses crottes de nez", "Les jeux vidéos", "Le bandana", 
    "Le debardeur", "La coupe mulet", "Les ferias", "La bière", "L’accent quebecois", "Le protoxyde d’azote", "Le poppers", "Le matelas gonflable", "La lecture", "La méditation", 
    "Les habits de marque", "La kronenbourg", "Les boites de nuit", "Les fetes de village", "Les business school", "Le canoe", "Le bowling", "L’accrobranche", "Les heures de colle", 
    "Les divisions", "Le k-way", "La vodka", "Le whisky", "Le cigare", "Offrir des roses", "La saint valentin", "Taxi 5 (le film)", "Prison break", "Plus belle la vie", "Malcolm", 
    "Star wars", "Harry potter", "Les mangas", "Les dessins animés", "L'opéra", "Les forfaits free", "Le covoiturage", "Faire du stop", "La tecktonik", "Les western", 
    "Les espagnol(e)s", "Le loto", "Les paris sportifs", "Les mots croisés", "Les malabars", "3 cafes gourmands", "Johnny halliday", "Harley davidson", "Les blocus", 
    "Battre son conjoint", "Brigitte macron", "Emily ratajkowski", "Les guinguettes", "Le baby foot", "Le jeux gta", "Lionel messi", "Cristiano ronaldo", "La ps5", 
    "La nintendo switch", "Les pates 3 minutes", "Les talons aiguilles", "Les ballerines", "Les maillots strings", "Primark", "Dormir en cuillère", "Le métro", 
    "Le fiat multipla", "L'acné", "L'appareil dentaire", "Le poivre", "Le catch", "Les chats", "Les chiens", "Faire son lit"],
    ["avortement", "theme1", "theme2"],
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