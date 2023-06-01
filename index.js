import * as photoloader from "./lib/photoloader.js";


const getPicture = function(idPicture){
    let pr = photoloader.loadPicture(idPicture);
    console.log(pr.status);
        pr.then(function(response){
        if(response.status == 200){
            response.json().then(function(data){
                console.log(data.photo.titre);
                console.log(data.photo.url.href);
                console.log(data.photo.type);
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

getPicture(105);

