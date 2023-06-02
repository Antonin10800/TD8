import * as conf from './conf.js';
export function displayPicture(picture) {
    let div = document.getElementById('la_photo');
    var url = conf.url;
    let cutoffIndex = url.indexOf("univ-lorraine.fr/") + 17;

    let result = url.substring(0, cutoffIndex);
    result = result + picture.url.href;

    div.innerHTML = "<img src='" + result + "' alt='" + picture.titre + "' style='width: 40% '><br>" + picture.titre + "<br>" + picture.type;
    return div;
}

export function displayResource(resource) {

    let div = document.getElementById('la_categorie');
    console.log()
    div.innerHTML = "<h2> catégorie </h2><br>" + resource.nom + "<br>" + resource.description;
    return div;
}
export function parsLink(){
    let link = conf.url;
    let cutoffIndex = link.indexOf("univ-lorraine.fr/") + 16;
    let result = link.substring(0, cutoffIndex);
    return result;
}

