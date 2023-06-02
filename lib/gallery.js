import * as conf from './conf.js';
import {loadPicture} from "./photoloader.js";

export function load(URL) {
    let promise = fetch(URL);

    return promise.then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erreur de chargement des photos');
        }
    });



}
