import { Carousel, initTE } from "tw-elements";
import refs from "./refs";

initTE({ Carousel });

export const myCarousel = new Carousel(document.getElementById("myCarousel"));

export function toggleFlexSlider() {
  refs.sliderItems.forEach((el) => {
    if (el.hasAttribute("data-te-carousel-active")) {
      console.log("HAS");
      el.classList.add("flex-carousel-item");
    } else if (!el.hasAttribute("data-te-carousel-active")) {
      console.log("HAS NOT");
      el.classList.remove("flex-carousel-item");
    }
  });
}
