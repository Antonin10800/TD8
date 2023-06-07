import * as conf from "./conf.js";
import {getPicture} from "./../photobox.js";

// affichage de la gallerie
export function display_gallerie(data){
    let div = document.querySelector("#gallery_container")
    let html = ""
    data.photos.forEach(photos => {
        html += `
            <div class="vignette">
                <img data-photoId="${photos.photo.id}" src="${conf.parsLink() + photos.photo.thumbnail.href}">
            </div>
        `
    })
    div.innerHTML = html
    const vignette = document.querySelectorAll('.vignette');

    vignette.forEach((elem) => {

        elem.addEventListener('click', function (event) {
            let idPicture = event.target.getAttribute('data-photoId');

            getPicture(idPicture);
        })
    })

    return div
}