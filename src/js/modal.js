import { allItems } from "./gallery";
import refs from "./refs";
console.log("allItems", allItems);
export function showModal(e) {
  e.preventDefault();
  
  const largeImg = allItems.find((el) => {
    return el.webformatURL === e.target.currentSrc;
  });
  const largeImgMarkup = `<img class="block object-cover" src="${largeImg.largeImageURL}" alt="${largeImg.tags}"><div class="absolute bottom-0 left-0 w-full bg-slate-600">
      <p>${largeImg.tags}</p>
    </div>`;
  refs.modalImgContainer.insertAdjacentHTML("afterbegin", largeImgMarkup);
  refs.modalContainer.classList.remove("invisible");
  refs.modalContainer.classList.add("flex");
  refs.body.classList.add("overflow-hidden");

  refs.gallery.removeEventListener("click", showModal);
  refs.body.addEventListener("keydown", closeModal);
  refs.modalContainer.addEventListener("click", closeModal);
}

export function closeModal(e) {
  e.preventDefault();

  console.log("e.target closeModal", e);
  if (e.code === "Escape" || e.type === "click") {
    refs.modalContainer.classList.add("invisible");
    refs.modalContainer.classList.remove("flex");
    refs.body.classList.remove("overflow-hidden");
    refs.modalImgContainer.innerHTML = "";
    refs.modalContainer.removeEventListener("click", closeModal);
    refs.body.removeEventListener("keydown", closeModal);
    refs.gallery.addEventListener("click", showModal);
  }
}
