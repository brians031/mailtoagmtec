document.addEventListener('DOMContentLoaded', function() {
  // Ouvre une fenêtre pop-up avec l'email pré-rempli
  var mailtoLink = "mailto:contact@agm-tec.com?subject=demande%20de%20contact&body=Bonjour,%0D%0A%0D%0AJe%20suis%20intéressé%20et%20je%20souhaiterai%20obtenir%20plus%20d’informations%20concernant%20votre%20matériel.%0D%0A%0D%0AMerci%20de%20me%20contacter%0D%0APar%20téléphone%20:%20%200561429063%0D%0APar%20mail%20:%20contact@agm-tec.com";

  var newWindow = window.open(mailtoLink, "_blank", "width=1,height=1,top=-1000,left=-1000");

  // Ferme la fenêtre actuelle (si elle a été ouverte par script)
  if (newWindow) {
    window.close();
  }
});
