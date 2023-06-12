(() => {
  // lib/conf.js
  var url = "https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos";
  function parsLink() {
    let link = url;
    let cutoffIndex = link.indexOf("univ-lorraine.fr/") + 16;
    let result = link.substring(0, cutoffIndex);
    return result;
  }

  // lib/gallery.js
  var next;
  var prev;
  var first;
  var last;
  function saveLinks(data) {
    next = data.links.next.href;
    prev = data.links.prev.href;
    first = data.links.first.href;
    last = data.links.last.href;
  }
  function getPromise(pr) {
    return pr.then((response) => {
      if (response.ok) {
        let pro = response.json();
        pro.then((data) => {
          saveLinks(data);
          return data;
        });
        return pro;
      } else {
        console.log(response.status);
      }
    }).catch((error) => console.log(error));
  }
  function load() {
    let pr = fetch(url);
    return getPromise(pr);
  }
  function loadNext() {
    let pr = fetch(parsLink() + next);
    return getPromise(pr);
  }
  function loadPrev() {
    let pr = fetch(parsLink() + prev);
    return getPromise(pr);
  }
  function loadFirst() {
    let pr = fetch(parsLink() + first);
    return getPromise(pr);
  }
  function loadLast() {
    let pr = fetch(parsLink() + last);
    return getPromise(pr);
  }

  // lib/gallery_ui.js
  function display_gallerie(data) {
    let div = document.querySelector("#gallery_container");
    let html = "";
    data.photos.forEach((photos) => {
      html += `
            <div class="vignette">
                <img data-photoId="${photos.photo.id}" src="${parsLink() + photos.photo.thumbnail.href}">
            </div>
        `;
    });
    div.innerHTML = html;
    const vignette = document.querySelectorAll(".vignette");
    vignette.forEach((elem) => {
      elem.addEventListener("click", function(event) {
        let idPicture = event.target.getAttribute("data-photoId");
        getPicture(idPicture);
      });
    });
    return div;
  }

  // lib/photoloader.js
  function loadPicture(idPicture) {
    let url2 = url + "/" + idPicture;
    let promise = fetch(url2);
    return promise.then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.status);
      }
    }).catch((error) => console.log(error));
  }
  function loadResource(URI, parsedLink) {
    let response = fetch(parsedLink + URI);
    return response.then((response2) => {
      if (response2.ok) {
        return response2.json();
      } else {
        console.log(response2.status);
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  function loadComments(URI, parseLink) {
    return fetch(parseLink + URI).then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(new Error("Probl\xE8me de r\xE9cup\xE9ration des commentaires"));
      }
    }).catch(function(error) {
      console.log("Error : " + error);
    });
  }

  // lib/photo_ui.js
  function displayPicture(picture) {
    let div = document.getElementById("la_photo");
    var url2 = url;
    let cutoffIndex = url2.indexOf("univ-lorraine.fr/") + 17;
    let result = url2.substring(0, cutoffIndex);
    result = result + picture.url.href;
    div.innerHTML = "<img src='" + result + "' alt='" + picture.titre + "' style='width: 40% '><br>" + picture.titre + "<br>" + picture.type;
    return div;
  }
  function displayRessource(ressource) {
    let div = document.getElementById("la_photo");
    let divRessource = `
        <div id="ressource">
            <h2>Ressource</h2>
            <ul>
                <li>Id : ${ressource.categorie.id}</li>
                <li>Nom : ${ressource.categorie.nom}</li>
                <li>Description : ${ressource.categorie.descr}</li>
            </ul>
        </div>
        `;
    div.innerHTML += divRessource;
    return div;
  }
  function displayComments(data) {
    let div = document.getElementById("la_photo");
    let html = `
        <div id="comments">
            <h2>Commentaires</h2>
            <h3>Nombre de commentaires : ${data.size}</h3>
    `;
    data.comments.forEach((comment) => {
      html += `
        <div class="comment">
            <p><pseudo id="pseudo">${comment.pseudo} :</pseudo> <titre id="titre">${comment.titre}</titre> <i>${comment.date}</i></p>
            <p>${comment.content}</p>
        </div>
    `;
    });
    html += "</div>";
    div.innerHTML += html;
    return div;
  }

  // photobox.js
  document.querySelectorAll(".bt2").forEach((elem) => {
    elem.disabled = true;
  });
  var getGallerie = function() {
    let pr = load();
    pr.then(function(data) {
      display_gallerie(data);
    });
    document.querySelectorAll(".bt2").forEach((elem) => {
      elem.disabled = false;
    });
    document.getElementById("load_gallery").disabled = true;
  };
  var first2 = function() {
    let pr = loadFirst();
    pr.then(function(data) {
      display_gallerie(data);
    });
  };
  var last2 = function() {
    let pr = loadLast();
    pr.then(function(data) {
      display_gallerie(data);
    });
  };
  var next2 = function() {
    let pr = loadNext();
    pr.then(function(data) {
      display_gallerie(data);
    });
  };
  var prev2 = function() {
    let pr = loadPrev();
    pr.then(function(data) {
      display_gallerie(data);
    });
  };
  var getPicture = function(idPicture) {
    let pr = loadPicture(idPicture);
    pr.then(function(response) {
      displayPicture(response.photo);
      getResource(response);
      getComments(response);
    });
    pr.catch(function(error) {
      console.log("Error getPicture" + error);
    });
  };
  function getResource(dataImg) {
    let parsedLink = parsLink();
    let pr = loadResource(dataImg.links.categorie.href, parsedLink);
    pr.then(
      function(response) {
        displayRessource(response);
      }
    );
  }
  function getComments(dataImg) {
    let pasrsedLink = parsLink();
    let pr = loadComments(dataImg.links.comments.href, pasrsedLink);
    pr.then(function(data) {
      displayComments(data);
    });
  }
  var bt_load = document.getElementById("load_gallery");
  bt_load.addEventListener("click", getGallerie);
  var bt_next = document.getElementById("next_page");
  bt_next.addEventListener("click", next2);
  var bt_prev = document.getElementById("previous_page");
  bt_prev.addEventListener("click", prev2);
  var bt_first = document.getElementById("first_page");
  bt_first.addEventListener("click", first2);
  var bt_last = document.getElementById("last_page");
  bt_last.addEventListener("click", last2);
})();
