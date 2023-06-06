import * as gallerie from './lib/gallery.js';
import * as gallerie_ui from './lib/gallery_ui.js';
import * as photoloader from "./lib/photoloader.js";
import * as photo_ui from "./lib/photo_ui.js";
import * as conf from "./lib/conf.js";
import {prev,next,load} from "./lib/gallery.js";

const getGallerie = function (url , action) {
    let pr;
    switch (action){
        case 'suivant':
            pr = next();
            break;
        case 'precedent':
            pr = prev();
            break;
        default:
            pr =    load(url);
    }

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


const charger = document.getElementById('load_gallery');
//charger.addEventListener('click', getGallerie(conf.url));

/*
const suivant = document.getElementById('next_page');
suivant.addEventListener('click', getGallerie(conf.url, 'suivant'));

const precedent = document.getElementById('previous_page');
precedent.addEventListener('click', getGallerie(conf.url, 'precedent'));
*/

/*
const vignette = document.querySelector('.vignette');
vignette.addEventListener('click', function (event) {

    let idPicture = event.target.getAttribute('data-photoId');
    console.log(idPicture);
    getPicture(idPicture);
});

 */

