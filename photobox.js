import * as gallerie from './lib/gallery.js';
import * as gallerie_ui from './lib/gallery_ui.js';
import * as conf from "./lib/conf";

const getGallerie = function () {
    let pr = gallerie.load(conf.url)

    pr.then(function (data) {
        gallerie_ui.display_gallerie(data)
    })
};

const load = document.getElementById('load_gallery');
load.addEventListener('click', getGallerie);

//getGallerie();