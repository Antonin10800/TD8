
import * as conf from './conf.js';
import * as ui from "./ui.js";
export function loadPicture(idPicture){
    let url = conf.url +'/'+ idPicture;
    
        let promise = fetch(url);
        return promise;
    
}

export function loadResource( URI, parsedLink){
    console.log(parsedLink + URI);
    let response = fetch(parsedLink + URI);
    return response;

}

export function loadComments(URI, parseLink) {
    console.log(parseLink + URI)
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