import * as conf from './conf.js';
import * as photo_ui from "./photo_ui.js";

export function loadPicture(idPicture) {
    let url = conf.url + '/' + idPicture;
    let promise = fetch(url);
    return promise.then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response.status);
        }
    }).catch((error) => console.log(error));

}

export function loadResource(URI, parsedLink) {
    let response = fetch(parsedLink + URI);
    return response.then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response.status);
        }
    }).catch((error) => {
        console.log(error);
    });

}

export function loadComments(URI, parseLink) {
    return fetch(parseLink + URI)
        .then(function(response){
            if(response.ok){
                return response.json();
            }
            else{
                return Promise.reject(new Error('Problème de récupération des commentaires'));
            }
        }).catch(function(error){
            console.log("Error : " + error);
        })
}