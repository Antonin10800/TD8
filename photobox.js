import * as gallerie from './lib/gallery.js';
import * as gallerie_ui from './lib/gallery_ui.js';
import * as photoloader from "./lib/photoloader.js";
import * as photo_ui from "./lib/photo_ui.js";
import * as conf from "./lib/conf";

const getGallerie = function () {
    let pr = gallerie.load(conf.url)

    pr.then(function (data) {
        gallerie_ui.display_gallerie(data)
    })
};


const getPicture = function (idPicture) {
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

function getResource(dataImg) {
    let parsedLink = photo_ui.parsLink();

    let pr = photoloader.loadResource(dataImg.links.categorie.href, parsedLink);
    pr.then(function (response) {
            photo_ui.displayRessource(response);
        }
    );
}

function getComments(dataImg){
    let pasrsedLink = photo_ui.parsLink();
    let pr = photoloader.loadComments(dataImg.links.comments.href, pasrsedLink);
    pr.then(function(data){
        photo_ui.displayComments(data);
    });

}

const load = document.getElementById('load_gallery');
load.addEventListener('click', getGallerie);

