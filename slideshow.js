"use strict";
var $getid = function (id) { return document.getElementById(id); };

var imageCache = [];
var imageCounter = 0;
var msgTimer;
var timer;

console.log("Loaded");
var runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    var image = imageCache[imageCounter];
    $getid("image").src = image.src;
    $getid("caption").firstChild.nodeValue = image.title;
    return true;
};


window.onload = function () {
    var listNode = $getid("image_list");    // the ul element
    var links = listNode.getElementsByTagName("a");
    var timer;
    // Preload image, copy title properties, and store in array
    var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.getAttribute("href");
        image.title = link.getAttribute("title");
        imageCache[imageCache.length] = image;
        console.log("i = " + i);
    }

    // Attach start and pause event handlers
    $getid("start").onclick = function() {
        runSlideShow();
        timer = setInterval(runSlideShow, 2000);
        $getid("start").setAttribute("disabled", "true");
        $getid("pause").removeAttribute("disabled");
    };
     $getid("pause").onclick = function() {
        console.log("Step 1 of pause");
        clearInterval(timer);
        $getid("pause").setAttribute("disabled", "true");
        $getid("start").removeAttribute("disabled"); 
    }; 
};