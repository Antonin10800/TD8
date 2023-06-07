import * as conf from './conf.js';

//fonction d'affichage d'une image
export function displayPicture(picture) {
    let div = document.getElementById('la_photo');
    var url = conf.url;
    let cutoffIndex = url.indexOf("univ-lorraine.fr/") + 17;
    let result = url.substring(0, cutoffIndex);
    result = result + picture.url.href;
    div.innerHTML = "<img src='" + result + "' alt='" + picture.titre + "' style='width: 40% '><br>" + picture.titre + "<br>" + picture.type;
    return div;
}

//fonction d'affichage des ressources d'une image
export function displayRessource(ressource) {
    let div = document.getElementById('la_photo');
    let divRessource = `
        <div id="ressource">
            <h2>Ressource</h2>
            <ul>
                <li>Id : ${ressource.categorie.id}</li>
                <li>Nom : ${ressource.categorie.nom}</li>
                <li>Description : ${ressource.categorie.descr}</li>
            </ul>
        </div>
        `;
    div.innerHTML += divRessource;
    return div;
}

//fonction d'affichage des commentaires d'une image
export function displayComments(data) {
    let div = document.getElementById("la_photo");
    let html = `
        <div id="comments">
            <h2>Commentaires</h2>
            <h3>Nombre de commentaires : ${data.size}</h3>
    `;
    data.comments.forEach(comment => {
        html += `
        <div class="comment">
            <p><pseudo id="pseudo">${comment.pseudo} :</pseudo> <titre id="titre">${comment.titre}</titre> <i>${comment.date}</i></p>
            <p>${comment.content}</p>
        </div>
    `;
    })
    html += "</div>";
    div.innerHTML += html;
    return div;
}


