import * as conf from './conf.js';

let next, prev, first, last;

function saveLinks(data) {
    next = data.links.next.href;
    prev = data.links.prev.href;
    first = data.links.first.href;
    last = data.links.last.href;
}

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

export function load() {
    let pr = fetch(conf.url)
    return getPromise(pr);
}

export function loadNext() {
    let pr = fetch(conf.parsLink()+next)
    return getPromise(pr);
}

export function loadPrev() {
    let pr = fetch(conf.parsLink()+prev)
    return getPromise(pr);
}

export function loadFirst() {
    let pr = fetch(conf.parsLink()+first)
    return getPromise(pr);
}

export function loadLast() {
    let pr = fetch(conf.parsLink()+last)
    return getPromise(pr);
}
