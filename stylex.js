function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("dmt1.gif")) {
        image.src = "dmt2.gif";
    }
    else if (image.src.match("dmt2.gif")) {
        image.src = "dmt3.gif";
    }
    else if (image.src.match("dmt3.gif")) {
         image.src = "dmt4.gif";
     }
    else if (image.src.match("dmt4.gif")) {
        image.src = "dmt1.gif";
    }
}