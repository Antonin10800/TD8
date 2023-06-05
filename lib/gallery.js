import * as conf from './conf.js';

export function load() {
    let pr = fetch(conf.url)
    console.log(conf.url)
    return pr.then(response => {
        if(response.ok) {
            return response.json();
        } else {
            console.log(response.status)
        }
    }).catch(error => console.log(error));
}
