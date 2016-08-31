var random_images_array = ["20160820_194807_Richtone(HDR).jpg", "Appart_balcons.JPG", "architecte.JPG", "avec_garage.JPG", "charlott lingerie.jpg", "eco_compatible.JPG", "fresnoy.JPG", "machines.jpg", "maison_bleue.JPG", "maison_tradition.JPG", "moderne.JPG", "quartier_paisible.JPG", "siege.JPG", "style_alsace.JPG", "traditionnel.JPG"];
function getRandomImage(imgAr, path) {
    path = path || 'img/img_random'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="img/img_random' + path + img + '" alt = "atelierdYza">';
    document.write(imgStr); document.close();
}
