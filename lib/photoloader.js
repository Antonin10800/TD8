import * as conf from './conf.js';

//fonction pour charger une image
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

//fonction pour charger les ressources d'une image
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

//fonction pour charger les commentaires d'une image
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