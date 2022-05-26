// On défini le breakpoint sur lequel on veut modifier le placement du footer grâce à la méthode matchmedia
const mediaQuery = window.matchMedia('(max-width: 767px)');
mediaQuery.addEventListener("change", handleTabletChange);

 // On sélectionne l'élément footer  
 const footerElement = document.getElementById("footer");

 // On sélectionne les blocs parents
 const leftContentBlock = document.querySelector(".left-content");
 const rightContentBlock = document.querySelector(".right-content");

function handleTabletChange(event) {

    if (event.matches) {
        console.log('mode tablette');
        // On retire le footer de la partie droite et On l'ajoute à gauche
        footerElement.remove();
        leftContentBlock.appendChild(footerElement);
    }
    else {
        console.log('mode pc');
        // On retire le footer de la partie gauche on le remet à droite
        footerElement.remove();
        rightContentBlock.appendChild(footerElement);
    }
};

// On check initialement la taille de l'écran 
handleTabletChange(mediaQuery);