document.addEventListener('DOMContentLoaded', function() {
 var mailtoLink = "mailto:contact@agm-tec.com?subject=" + encodeURIComponent("demande de contact") + "&body=" + encodeURIComponent("Bonjour,\n\nJe suis intéressé et je souhaiterai obtenir plus d’informations concernant votre matériel.\n\nMerci de me contacter\nPar téléphone :\nPar mail :");

  
  // Ouvre le mailto dans une fenêtre pop-up invisible
  var newWindow = window.open(mailtoLink, "_blank", "width=1,height=1,top=-1000,left=-1000");

  // Si la fenêtre est ouverte, on tente de fermer la fenêtre courante (cela ne fonctionnera pas dans tous les cas)
  if (newWindow) {
    window.close();
  }
});
