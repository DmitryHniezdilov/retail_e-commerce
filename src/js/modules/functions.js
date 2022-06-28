import $ from "jquery";

// init modal
$('#js-modal-nav').on('shown.bs.modal', function () {
})

// init sliders

$(document).ready(function () {
    $(".js-slider-projects").slick({
        infinite: true,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

    $(".js-slider-solutions").slick({
        infinite: true,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

    $(".js-slider-products").slick({
        infinite: true,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
})
