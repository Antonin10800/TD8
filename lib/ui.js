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

export function displayRessource(ressource) {
console.log(ressource);
    let div = document.getElementById('la_photo');
    let divRessource = `
        <div id="ressource">
            <h2>Resource</h2>
            <ul>
                <li>id: ${ressource.id}</li>
                <li>nom: ${ressource.nom}</li>
                <li>description: ${ressource.descr}</li>
            </ul>
        </div>
        `;
    div.innerHTML += divRessource;
    return div;
}
export function parsLink(){
    let link = conf.url;
    let cutoffIndex = link.indexOf("univ-lorraine.fr/") + 16;
    let result = link.substring(0, cutoffIndex);
    return result;
}

