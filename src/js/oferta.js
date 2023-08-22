import refs from "./refs";

const ofertaUserData = {
  city: "",
  name: "",
  phoneNumber: "",
  square: "",
  pool: "",
  additionals: [],
  comments: "",
};

const tickMark =
  '<svg width="58" height="45" viewBox="0 0 58 45" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="nonzero" d="M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65"/></svg>';
const xTickMark =
  '<svg width="58" height="45" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>';

export function ofertaWindowHandler() {
  refs.ofertaSubmitBtn.classList.remove("button-submit__circle");
  refs.ofertaCancelBtn.classList.remove("button-cancel__circle");
  refs.ofertaSubmitBtnText.innerHTML = "Submit";
  refs.ofertaCancelBtnText.innerHTML = "Cancel";

  refs.ofertaWrapper.classList.remove("out-oferta");
  refs.ofertaModal.classList.remove("oferta-modal-off");

  refs.ofertaWrapper.classList.add("on-oferta");
  refs.ofertaModal.classList.add("oferta-modal-on");
  refs.body.classList.add("overflow-hidden");

  refs.ofertaRangeInput.addEventListener("change", rangeHandler);
  refs.ofertaRangeViewInput.addEventListener("input", customRangeHandler);
  refs.ofertaSubmitBtn.addEventListener("click", submitClickHandler);
  refs.ofertaCancelBtn.addEventListener("click", ofertaCancel);
  refs.ofertaForm.addEventListener("submit", ofertaFormHandler);
}

export function ofertaWindowClose() {
  refs.ofertaWrapper.classList.add("out-oferta");
  refs.ofertaModal.classList.add("oferta-modal-off");

  refs.ofertaWrapper.classList.remove("on-oferta");
  refs.ofertaModal.classList.remove("oferta-modal-on");

  refs.body.classList.remove("overflow-hidden");

  refs.ofertaRangeInput.removeEventListener("change", rangeHandler);
  refs.ofertaRangeViewInput.removeEventListener("input", customRangeHandler);
  refs.ofertaSubmitBtn.removeEventListener("click", submitClickHandler);
  refs.ofertaCancelBtn.removeEventListener("click", ofertaCancel);
  refs.ofertaForm.removeEventListener("submit", ofertaFormHandler);
  // refs.ofertaSubmitBtn.classList.remove("button-submit__circle");
}
export function ofertaCancel() {
  refs.ofertaCancelBtnText.innerHTML = xTickMark;
  refs.ofertaCancelBtn.classList.toggle("button-cancel__circle");
  setTimeout(() => {
    ofertaWindowClose();
  }, 500);
}

export function ofertaFormHandler(e) {
  e.preventDefault();
  let isPool = "";
  e.target.pool.forEach((el) => {
    if (el.checked) return (isPool = el.value);
  });

  let checkedEls = [];
  e.target.addons.forEach((element) => {
    if (element.checked) {
      checkedEls = [...checkedEls, { addon: element.value }];
    }
  });

  ofertaUserData.city = e.target.city.value;
  ofertaUserData.name = e.target.name.value;
  ofertaUserData.phoneNumber = e.target.phone.value;
  ofertaUserData.square = e.target.sqaureInpt.value;
  ofertaUserData.additionals = checkedEls;
  ofertaUserData.pool = isPool;
  ofertaUserData.comments = e.target.comments.value;
  console.log("ofertaUserData", ofertaUserData);
}

export function rangeHandler(e) {
  refs.ofertaRangeViewInput.value = e.target.value;
}

export function customRangeHandler(e) {
  refs.ofertaRangeInput.value = e.target.value;
}

export function submitClickHandler() {
  refs.ofertaSubmitBtnText.innerHTML = tickMark;

  refs.ofertaSubmitBtn.classList.toggle("button-submit__circle");

  setTimeout(() => {
    ofertaWindowClose();
  }, 500);
}
