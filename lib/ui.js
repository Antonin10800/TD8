
export function displayPicture(picture){
    let img = document.getElementById('la_photo');
    img.src = picture.url.href;
    img.alt = picture.titre;
    let txt = document.getElementById('infos');
    txt.innerHTML = picture.titre + "<br>" + picture.type;
    return img;
}

