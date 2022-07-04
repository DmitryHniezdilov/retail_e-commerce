import $ from "jquery";

// init modal
if($('#js-modal-nav')) {
    $('#js-modal-nav').on('shown.bs.modal', function () {
    })
}

// init sliders

$(document).ready(function () {
    if($(".js-slider-projects")) {
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
    }

    if($(".js-slider-solutions")) {
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
    }

    if($(".js-slider-products")){
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
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        })
    }
})
