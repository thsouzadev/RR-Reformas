//Owl Carousel Configuration

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 8,
    nav: false,
    dots: false,
    stagePadding:50,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3,
        }
    }
})