import mobileNav from './modules/mobile-nav.js';
import splideModuleExport from "./modules/splide.min";

// Headline
document.querySelector('.headline__close').addEventListener('click', () => {
	document.querySelector('.headline').remove();
});

// Mobile Nav
mobileNav();


// Arrivals Slider
splideModuleExport();

var splide = new Splide( '.splide', {
	classes: {
	pagination: 'splide__pagination arrivals__dots',
	page      : 'splide__pagination__page arrivals__dot',
	},
	fixedWidth : '262px',
	fixedHeight: '459px',
	gap: '24px',
	perPage: 4,
	perMove: 3,
	arrows: false,
	breakpoints: {
		375: {
			fixedWidth : '230px',
			gap: '15px'
		}
	}
} );
  
splide.mount();