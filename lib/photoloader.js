
import * as conf from './conf.js';
export function loadPicture(idPicture){
    let url = conf.url +'/'+ idPicture;
    
        let promise = fetch(url);
        return promise;
    
}