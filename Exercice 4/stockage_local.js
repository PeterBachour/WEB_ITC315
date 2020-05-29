function initialize() {
    //Vérifier si le navigateur que l'utilisateur utilise supporte l'API Web Storage du W3C.
    var bSupportsLocal = (('localStorage' in window) && window['localStorage'] !== null);
    
    //Si le navigateur ne supporte pas le stockage local, un message sera afficher et un "return"
    //sera mise en éxecution.
    if (!bSupportsLocal) {
        document.getElementById('infoform').innerHTML = "<p>Désolé, ce navigateur ne supporte " +
        "pas l’API Web Storage du W3C.</p>";
        return;
    }

    //Au lancement de la page, affichage du contenu du localStorage dans les elements associé 
    if (window.localStorage.length != 0) {
        document.getElementById('firstName').value = window.localStorage.getItem('firstName');
        document.getElementById('lastName').value = window.localStorage.getItem('lastName');
        document.getElementById('postCode').value = window.localStorage.getItem('postCode');
    }
}

//Sauvegarder les valeurs avec un id associé dans le local storage.
//Cette fonction est appelée lorsque l'utilisateur décide de sauvegarder des données.
function storeLocalContent(fName, lName, pCode) {
    window.localStorage.setItem('firstName', fName);
    window.localStorage.setItem('lastName', lName);
    window.localStorage.setItem('postCode', pCode);
}

//Nettoie le stockage locale ainsi que vider les elements des valeurs effacer.
function clearLocalContent() {
    window.localStorage.setItem('firstName', "");
    window.localStorage.setItem('lastName', "");
    window.localStorage.setItem('postCode', "");

    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('postCode').value = "";
}
window.onload = initialize;


