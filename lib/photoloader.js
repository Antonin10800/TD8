
import * as conf from './conf.js';
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
    let response = fetch(parseLink + URI);
    return response;
}