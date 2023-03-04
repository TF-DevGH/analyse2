// On attend que la page soit chargée
$(document).ready(function () {

    // On déclare une variable pour stocker si le prix est atteint ou pas
    var itemPriceReached = false;

    // On crée une fonction qui récupère le prix de l'AK-47 | Neon Revolution (Factory New)
    function getItemPrice() {

        // On envoie une requête à l'API Steam pour récupérer le prix de l'AK-47 | Neon Revolution (Factory New)
        $.get('https://steamcommunity.com/market/priceoverview/?appid=730&currency=3&market_hash_name=AK-47%20%7C%20Neon%20Revolution%20%28Factory%20New%29', function (data) {

            // On récupère le prix de l'item
            var itemPrice = parseFloat(data.median_price.replace(',', '.'));

            // On vérifie si le prix est inférieur ou égal à 52,68€
            if (itemPrice <= 52.68 && !itemPriceReached) {

                // On met à jour la variable "itemPriceReached" à "true"
                itemPriceReached = true;

                // On sélectionne le bouton HTML avec l'ID "myButton" et on change sa couleur de bleu à rouge

                $('#myButton').addClass('red-button');
            }
        });
    }

    // On appelle la fonction "getItemPrice" toutes les 10 secondes pour vérifier le prix de l'item
    setInterval(getItemPrice, 10000);
});