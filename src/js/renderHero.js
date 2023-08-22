
import refs from "./refs";


const { getImages } = require("./api");
export let carousel = {}
export async function renderHeroImg() {
  let slides = [];
  const pics = await getImages({keyWord: "garden", page: 1});
  const heroMarkup = `${pics.hits
    .map((img, index) => {
      // let isHidden = index === 0 ? "" : "hidden";

      return `<div class="hidden duration-700 ease-in-out" data-carousel-item id="carousel-item-${
        index + 1
      }"><img src="${
        img.webformatURL
      }" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"" alt="${
        img.tags
      }"></div>`;
    })
    .join("")}`;
  refs.heroImg.insertAdjacentHTML("afterbegin", heroMarkup);

  await document
    .querySelectorAll("div[data-carousel-item]")
    .forEach(async (item, index) => {
       it = {
        position: index,
        el: document.getElementById(`carousel-item-${index + 1}`),
      };

       return slides.push(it);
      
    })
  console.log('slides', slides)
 carousel = new Carousel(slides)
}
