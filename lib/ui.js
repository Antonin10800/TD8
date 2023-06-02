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
ressource.json().then(function(data){
    console.log(data);
        let div = document.getElementById('la_photo');
        let divRessource = `
        <div id="ressource">
            <h2>Ressource</h2>
            <ul>
                <li>Id : ${data.categorie.id}</li>
                <li>Nom : ${data.categorie.nom}</li>
                <li>Description : ${data.categorie.descr}</li>
            </ul>
        </div>
        `;
        div.innerHTML += divRessource;
        return div;
}
);


}
export function parsLink(){
    let link = conf.url;
    let cutoffIndex = link.indexOf("univ-lorraine.fr/") + 16;
    let result = link.substring(0, cutoffIndex);
    return result;
}

