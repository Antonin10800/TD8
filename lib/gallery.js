import * as conf from './conf.js';

//variable des différents liens
let next, prev, first, last;

function saveLinks(data) {
    next = data.links.next.href;
    prev = data.links.prev.href;
    first = data.links.first.href;
    last = data.links.last.href;
}

//fonction qui retourne une promesse
function getPromise(pr) {
    return pr.then(response => {
        if (response.ok) {
            let pro = response.json();
            pro.then(data => {
                saveLinks(data);
                return data;
            })
            return pro;
        } else {
            console.log(response.status)
        }
    }).catch(error => console.log(error));
}

//fonction qui retourne la promesse du premier chargement de page
export function load() {
    let pr = fetch(conf.url)
    return getPromise(pr);
}

//fonction qui retourne la promesse du chargement de page suivante
export function loadNext() {
    let pr = fetch(conf.parsLink()+next)
    return getPromise(pr);
}

//fonction qui retourne la promesse du chargement de page précédente
export function loadPrev() {
    let pr = fetch(conf.parsLink()+prev)
    return getPromise(pr);
}

//fonction qui retourne la promesse du chargement de la première page
export function loadFirst() {
    let pr = fetch(conf.parsLink()+first)
    return getPromise(pr);
}

//fonction qui retourne la promesse du chargement de la dernière page
export function loadLast() {
    let pr = fetch(conf.parsLink()+last)
    return getPromise(pr);
}
