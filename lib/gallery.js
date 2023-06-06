import * as conf from './conf.js';
let suivant;
let precedent;

export function load(url) {
    let pr = fetch(url)

    return pr.then(response => {
        if(response.ok) {
            let pro = response.json();
            pro.then(data => {
                suivant = data.links.next.href;
                precedent = data.links.prev.href;
                console.log(suivant);
                console.log(precedent);

                return data;
            })
            return pro;

        } else {
            console.log("aaa")
            console.log(response.status)
        }


    }).catch(error => console.log(error));

}

export function next(){
    return load(parsLink()+suivant);
}

export function prev(){
    return load(parsLink()+precedent);
}

function parsLink() {
    let link = conf.url;
    let cutoffIndex = link.indexOf("univ-lorraine.fr/") + 16;
    let result = link.substring(0, cutoffIndex);
    return result;
}


