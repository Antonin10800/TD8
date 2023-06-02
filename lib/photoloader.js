import * as conf from './conf.js';

export function loadPicture(idPicture) {
    let url = conf.url + '/' + idPicture;
    let promise = fetch(url);
    return promise.then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response.status);
        }
    }).catch((error) => {
        console.log(error);
    });

}

export function loadResource(URI, parsedLink) {
    console.log(parsedLink + URI);
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
    console.log(parseLink + URI)
    let response = fetch(parseLink + URI);
    return response;
}