import * as photoloader from "./lib/photoloader.js";
import * as photo_ui from "./lib/photo_ui.js";
import * as conf from "./lib/conf.js";



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
    let parsedLink = conf.parsLink();

    let pr = photoloader.loadResource(dataImg.links.categorie.href, parsedLink);
    pr.then(function (response) {
            photo_ui.displayRessource(response);
        }
    );
}

function getComments(dataImg){
    let parsedLink = conf.parsLink();
    let pr = photoloader.loadComments(dataImg.links.comments.href, parsedLink);
    pr.then(function(data){
        photo_ui.displayComments(data);
    });

}


getPicture(105);

