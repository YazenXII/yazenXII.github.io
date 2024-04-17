// jQuery script for Bootstrap's JavaScript plugins
$(document).ready(function () {
    // Activate Carousel
    $("#carouselExampleControls").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#carouselExampleControls").carousel(0);
    });
    $(".item2").click(function () {
        $("#carouselExampleControls").carousel(1);
    });
    $(".item3").click(function () {
        $("#carouselExampleControls").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function () {
        $("#carouselExampleControls").carousel("prev");
    });
    $(".carousel-control-next").click(function () {
        $("#carouselExampleControls").carousel("next");
    });
});
