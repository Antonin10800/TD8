import * as photoloader from "./lib/photoloader.js";
import * as ui from "./lib/ui.js";



const getPicture = function (idPicture) {
    let pr = photoloader.loadPicture(idPicture);

    pr.then(function (response) {
        ui.displayPicture(response.photo);

        getResource(response);
        getComments(response);

    });
    pr.catch(function (error) {
        console.log("Error getPicture" + error);
    });
}

function getResource(dataImg) {
    let parsedLink = ui.parsLink();

    let pr = photoloader.loadResource(dataImg.links.categorie.href, parsedLink);
    pr.then(function (response) {
            ui.displayRessource(response);
        }
    );
}

function getComments(dataImg){
    let pasrsedLink = ui.parsLink();
    let pr = photoloader.loadComments(dataImg.links.comments.href, pasrsedLink);
    pr.then(function(data){
        ui.displayComments(data);
    });

}


getPicture(105);

