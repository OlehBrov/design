import "./js/refs";
import refs from "./js/refs";
import "./js/slider";
import "tw-elements";
import { myCarousel } from "./js/slider";
import { galleryMarkup, loadMoreGallery } from "./js/gallery";
import { showModal } from "./js/modal";
import { inputHandler, searchHandler } from "./js/search";
import { ofertaWindowHandler } from "./js/oferta";

// window.onload = renderHeroImg;
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

refs.sliderNext.addEventListener("click", () => {
  myCarousel.next();
});
refs.sliderPrev.addEventListener("click", () => {
  myCarousel.prev();
});
refs.loadMoreBtn.addEventListener("click", loadMoreGallery);
refs.gallery.addEventListener("click", showModal);
refs.mobileMenuLinks.addEventListener("click", toggleMenu);

refs.headerSearchInput.addEventListener("input", inputHandler);
refs.searchForm.addEventListener("submit", searchHandler);
refs.ofertaLink.forEach(link => {
  link.addEventListener("click", ofertaWindowHandler)
});


console.log('refs.ofertaLink', refs.ofertaLink)