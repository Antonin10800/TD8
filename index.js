import * as photoloader from "./lib/photoloader.js";
import * as ui from "./lib/ui.js";



const getPicture = function(idPicture){
    let pr = photoloader.loadPicture(idPicture);

        pr.then(function(response){
        if(response.status == 200){
            response.json().then(function(data){

                ui.displayPicture(data.photo);

                getResource(data);
                getComments(data);
            });
        }
        else{
            console.log("Error " + response.status);
        }
    });
    pr.catch(function(error){
        console.log(error);
    });
}

function getResource(dataImg){
    let parsedLink = ui.parsLink();

    let pr = photoloader.loadResource(dataImg.links.categorie.href, parsedLink);
    pr.then(function(response){
        if(response.ok){
            ui.displayRessource(response);
        }
        else{
            console.log("Error " + response.status);
        }
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


