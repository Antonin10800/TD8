import * as gallerie from './lib/gallery.js';
import * as gallerie_ui from './lib/gallery_ui.js';
import * as photoloader from "./lib/photoloader.js";
import * as photo_ui from "./lib/photo_ui.js";
import * as conf from "./lib/conf.js";

//grisage des boutons inactif au début
document.querySelectorAll('.bt2').forEach((elem) => {
    elem.disabled = true;
})

//appel de la fonction de chargempent de la gallerie
// et appel de la fonction d'affichage de la gallerie
const getGallerie = function () {
    let pr = gallerie.load()
    pr.then(function (data) {
        gallerie_ui.display_gallerie(data)
    })
    document.querySelectorAll('.bt2').forEach((elem) => {
        elem.disabled = false;
    })
    document.getElementById('load_gallery').disabled = true;
};

//appel de la fonction de chargement de la première page et de son affichage
const first = function () {
    let pr = gallerie.loadFirst()
    pr.then(function (data) {
        gallerie_ui.display_gallerie(data)
    })
}

//appel de la fonction de chargement de la dernière page et de son affichage
const last = function () {
    let pr = gallerie.loadLast()
    pr.then(function (data) {
        gallerie_ui.display_gallerie(data)
    })
}

//appel de la fonction de chargement de la page suivante et de son affichage
const next = function () {
    let pr = gallerie.loadNext()
    pr.then(function (data) {
        gallerie_ui.display_gallerie(data)
    })
}

//appel de la fonction de chargement de la page précédente et de son affichage
const prev = function () {
    let pr = gallerie.loadPrev()
    pr.then(function (data) {
        gallerie_ui.display_gallerie(data)
    })
}

//appel de la fonction de chargement d'une image et de son affichage
export const getPicture = function (idPicture) {
    let pr = photoloader.loadPicture(idPicture);

    pr.then(function (response) {
        photo_ui.displayPicture(response.photo);

        getResource(response);
        getComments(response);

    });
    pr.catch(function (error) {
        console.log("Error getPicture" + error);
    });
}

//appel de la fonction de chargement des ressources d'une image et de son affichage
function getResource(dataImg) {
    let parsedLink = conf.parsLink();

    let pr = photoloader.loadResource(dataImg.links.categorie.href, parsedLink);
    pr.then(function (response) {
            photo_ui.displayRessource(response);
        }
    );
}

//appel de la fonction de chargement des commentaires d'une image et de son affichage
function getComments(dataImg){
    let pasrsedLink = conf.parsLink();
    let pr = photoloader.loadComments(dataImg.links.comments.href, pasrsedLink);
    pr.then(function(data){
        photo_ui.displayComments(data);
    });

}

//ajout des évènements sur les boutons
const bt_load = document.getElementById('load_gallery')
bt_load.addEventListener('click', getGallerie)


const bt_next = document.getElementById('next_page');
bt_next.addEventListener('click', next);

const bt_prev = document.getElementById('previous_page');
bt_prev.addEventListener('click', prev);

const bt_first = document.getElementById('first_page');
bt_first.addEventListener('click', first);

const bt_last = document.getElementById('last_page');
bt_last.addEventListener('click', last);



