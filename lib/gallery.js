import * as conf from './conf.js';
import {loadPicture} from "./photoloader";

export function load(URL) {
    let re = fetch(URL)
        .then(response => response.json())
        .then(json => {
            let pictures = json.map(p => loadPicture(p));
            return Promise.all(pictures);
        })
        .catch(error => console.log(error));
}
