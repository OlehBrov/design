const refs = {
  //Body
  body: document.querySelector("body"),

  //  Header
  searchBtn: document.querySelector('button[data-action="search"]'),
  searchInput: document.querySelector('form[data-action="searchInput"]'),
  headerSearchInput: document.querySelector("#headerSearchInput"),
  searchForm: document.querySelector("#search-form"),
  menuBtn: document.querySelector('button[data-action="menu"]'),
  mobileMenu: document.querySelector("#menu-wrap"),
  hamburgerMenu: document.querySelector(".hamburger-menu"),
  hamburgerLine: document.querySelectorAll(".hamburger-line"),

  // Mobile menu
  mobileMenuLinks: document.querySelector(".mobile-menu-links"),
  ofertaLink: document.querySelectorAll(".oferta-link"),

  // Hero
  heroImg: document.querySelector("#myCarousel"),
  // Hero slider
  sliderPrev: document.querySelector('button[data-te-slide="next"]'),
  sliderNext: document.querySelector('button[data-te-slide="prev"]'),
  sliderItems: document.querySelectorAll("div[data-te-carousel-item]"),
  //Projects gallery
  gallery: document.querySelector(".gallery-container"),
  loadMoreBtn: document.querySelector('button[data-action="more"]'),

  // Modal
  modalContainer: document.querySelector(".modal-container"),
  modalImgContainer: document.querySelector(".modal-window"),

  // Oferta
  ofertaWrapper: document.querySelector("#oferta-wrap"),
  ofertaModal: document.querySelector(".oferta-modal"),
  ofertaForm: document.querySelector("#oferta-form"),
  ofertaRangeInput: document.querySelector(".oferta-range-input"),
  ofertaRangeViewInput: document.querySelector("#sqaure-user-input"),
  check: document.querySelector(".check-icon"),
  // ofertaSubmitBtn: document.querySelector('.submit-btn'),
  ofertaSubmitBtn: document.querySelector("#button-submit"),
  ofertaSubmitBtnText: document.querySelector(".tick"),
  ofertaCancelBtn: document.querySelector("#button-close"),
  ofertaCancelBtnText: document.querySelector(".x-tick"),
};

export default refs;
