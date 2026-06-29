const articles = [

{
    titre:"Travaux sur la RN57 : circulation perturbée jusqu'en octobre",
    categorie:"Transports",
    image:"img/rn57.jpg",
    url:"articles/rn57.html",
    temps:"Il y a 2h"
},

{
    titre:"La croissance du Paradis Français dépasse les prévisions",
    categorie:"Économie",
    image:"img/economie.jpg",
    url:"articles/economie.html",
    temps:"Il y a 4h"
},

{
    titre:"Nouvelle campagne pour la préservation des forêts",
    categorie:"Société",
    image:"img/foret.jpg",
    url:"articles/forets.html",
    temps:"Il y a 5h"
},

{
    titre:"Découvrez les lacs du Jura, trésors naturels du pays",
    categorie:"Tourisme",
    image:"img/tourisme.jpg",
    url:"articles/tourisme.html",
    temps:"Il y a 6h"
}

];

function afficher(liste){

    const container = document.getElementById("articles");

    container.innerHTML = "";

    liste.forEach(article => {

        container.innerHTML += `
        <div class="card">

            <img src="${article.image}">

            <div class="card-content">

                <p>${article.categorie}</p>

                <h2>
                    <a href="${article.url}">
                        ${article.titre}
                    </a>
                </h2>

                <p>${article.temps}</p>

            </div>

        </div>
        `;
    });
}

function filtrer(categorie){

    if(categorie === "Tous"){
        afficher(articles);
        return;
    }

    afficher(
        articles.filter(
            a => a.categorie === categorie
        )
    );
}

afficher(articles);