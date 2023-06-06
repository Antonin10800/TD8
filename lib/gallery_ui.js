import * as photo_ui from "./photo_ui.js";

export function display_gallerie(data){
    let div = document.querySelector("#gallery_container")
    let html = ""
    data.photos.forEach(photos => {
        html += `
            <div class="vignette">
                <img data-photoId="${photos.photo.id}" src="${photo_ui.parsLink() + photos.photo.thumbnail.href}">
            </div>
        `

    })

    div.innerHTML = html
    return div
}