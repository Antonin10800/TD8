export const url = 'https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos';

export function parsLink() {
    let link = url;
    let cutoffIndex = link.indexOf("univ-lorraine.fr/") + 16;
    let result = link.substring(0, cutoffIndex);
    return result;
}