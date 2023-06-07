//lien de l'api
export const url = 'https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos';

//fonction pour couper le lien de l'api jusqu'au nom de domaine
export function parsLink() {
    let link = url;
    let cutoffIndex = link.indexOf("univ-lorraine.fr/") + 16;
    let result = link.substring(0, cutoffIndex);
    return result;
}