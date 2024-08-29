console.log('test 1...2...1...2');

const Hercule = {
    name : "Hercule",
    job : "Demi-Dieu",
    age : 35,
    departement : 75,
    arm : 60.5,
    inRelationship : true,

}

const herculeFriends = ["Jupiter","Junon","Alcmène","Déjanire"]

const headerBanner = document.getElementById("header-banner");

const title = document.createElement("h1");
title.className="banner__title";
title.textContent="Vous consultez le profil d'Hercule"
headerBanner.appendChild(title);

const profilName = document.getElementById("profil-name");

const menu = document.getElementById("menu-toggler");


menu.addEventListener("click", function(){
    headerBanner.classList.toggle("banner--open")
})



  