import * as conf from './conf.js';
export function displayPicture(picture) {
    let div = document.getElementById('la_photo');
    var url = conf.url;
    let cutoffIndex = url.indexOf("univ-lorraine.fr/") + 17;

    let result = url.substring(0, cutoffIndex);
    result = result + picture.url.href;

    div.innerHTML = "<img src='" + result + "' alt='" + picture.titre + "'><br>" + picture.titre + "<br>" + picture.type;
    return div;
}

