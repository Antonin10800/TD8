import * as conf from './conf.js';
let next;
let prev;

export function load(url) {
    let pr = fetch(url)

    return pr.then(response => {
        if(response.ok) {
            let pro = response.json();
            pro.then(data => {
                next = data.links.next.href;
                prev = data.links.prev.href;
                console.log(next);
                console.log(prev);

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
    return load(parsLink()+next);
}

export function prev(){
    return load(parsLink()+prev);
}

function parsLink() {
    let link = conf.url;
    let cutoffIndex = link.indexOf("univ-lorraine.fr/") + 16;
    let result = link.substring(0, cutoffIndex);
    return result;
}


