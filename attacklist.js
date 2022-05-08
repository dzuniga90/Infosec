"use strict";
$(document).ready(function() {
    $("#attacks h2").click(function(evt) {
        $(this).toggleClass("minus");
        if ($(this).attr("class") !== "minus") {
            $(this).next().slideUp(1000);
        }
        else {
            $(this).next().slideDown(1000);
        }

        evt.preventDefault();
    }); // end click
}); // end ready