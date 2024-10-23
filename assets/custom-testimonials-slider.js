// initialize slideshow

// config:
// assume there is just one single slider on the page
// navigation dots should be disabled
// no autoplay
// infinite loop
// the slides or cells should be aligned to the left side on initialization.
// pauseAutoPlayOnHover: false

// const testimonialSlider = new Flickity('.testimonial-slider', {
//     cellAlign: 'left',
//     wrapAround: true,
//     pageDots: false,
//     autoPlay: false,
//     pauseAutoPlayOnHover: false
// });

const testimonialSliders = document.querySelectorAll('.testimonial-slider');
testimonialSliders.forEach((slider) => {
    const autoPlay = Number(slider.dataset.autoplay);
    new Flickity(slider, {
        cellAlign: 'left',
        wrapAround: true,
        pageDots: false,
        autoPlay: autoPlay,
        pauseAutoPlayOnHover: false
    })
});

