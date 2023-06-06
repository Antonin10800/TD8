import * as gallerie from './lib/gallery.js';
import * as gallerie_ui from './lib/gallery_ui.js';

const getGallerie = function () {
    let pr = gallerie.load()

    pr.then(function (data) {
        gallerie_ui.display_gallerie(data)
    })
};

getGallerie();