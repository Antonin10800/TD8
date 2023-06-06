import * as conf from './conf.js';

let suivant;
let precedent;

export function load() {
    let pr = fetch(conf.url)

    return pr.then(response => {
        if(response.ok) {
            let pro = response.json();
            pro.then(data => {
                suivant = data.links.next.href;
                precedent = data.links.prev.href;


                return data;
            })
            return pro;

        } else {
            console.log("aaa")
            console.log(response.status)
        }


    }).catch(error => console.log(error));

}
