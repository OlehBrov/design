import "./js/refs";
import refs from "./js/refs";
import { galleryMarkup, loadMoreGallery } from "./js/gallery";
import { showModal } from "./js/modal";
import { inputHandler, searchHandler } from "./js/search";
import { ofertaWindowHandler } from "./js/oferta";
import Splide from '@splidejs/splide';

new Splide(refs.splide, {
    type: 'loop',
       classes: {
		arrows: 'splide__arrows hero_buttons-wrap',
		arrow : 'splide__arrow hero_buttons-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
  },
}).mount();

window.onload = galleryMarkup;
export function toggleSearch() {
  refs.searchInput.classList.toggle("translate-x-_9999");
  refs.searchBtn.classList.toggle("hidden");

  if (refs.searchBtn.classList.contains("hidden")) {
    refs.searchInput.addEventListener("focusout", toggleSearch);
    refs.headerSearchInput.value = "";
    setTimeout(() => refs.headerSearchInput.focus(), 1000);
  } else {
    refs.searchInput.removeEventListener("focusout", toggleSearch);
  }
}
function toggleMenu() {
  refs.mobileMenu.classList.toggle("-translate-y-120");
  refs.body.classList.toggle("overflow-hidden");
  refs.hamburgerMenu.classList.toggle("change");
  refs.searchBtn.classList.toggle("invisible");
}

refs.searchBtn.addEventListener("click", toggleSearch);
refs.hamburgerMenu.addEventListener("click", toggleMenu);

refs.loadMoreBtn.addEventListener("click", loadMoreGallery);
refs.gallery.addEventListener("click", showModal);
refs.mobileMenuLinks.addEventListener("click", toggleMenu);

refs.headerSearchInput.addEventListener("input", inputHandler);
refs.searchForm.addEventListener("submit", searchHandler);
refs.ofertaLink.forEach(link => {
  link.addEventListener("click", ofertaWindowHandler)
});
