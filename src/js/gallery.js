import macy from "macy";
import { getImages } from "./api";
import refs from "./refs";
import { lastSearch } from "./search";

const currentPage = {
  page: 1,
};
export let allItems = [];
export const macyInstance = macy({
 
  container: refs.gallery,
  mobileFirst: true,
  recalculate: true,
  breakAt: {
    1280: { margin: { x: 42, y: 42 }, columns: 3 },
    1024: {
      margin: { x: 42, y: 42 },
      columns: 3,
    },
    768: {
      margin: {
        x: 20,
        y: 10,
      },
      columns: 3,
    },
    400: {
      margin: {
        x: 15,
        y: 15,
      },
      columns: 2,
    },
    200: {
      margin: { x: 15 },
      columns: 1,
    },
  },
});

macyInstance.on(macyInstance.constants.EVENT_IMAGE_COMPLETE, function (ctx) {
  macyInstance.recalculate(true);
});

export async function galleryMarkup(queryObject) {
  if (!queryObject.hasOwnProperty('keyWord')) {
    queryObject = {
      keyWord: 'garden',
      page: 1
    }
  }
  const data = await getImages(queryObject);
  allItems = [...allItems, ...data.hits];

  const galleryMarkup = data.hits
    .map((img, index) => {
      return `<div class="grid-item flex justify-center grid-item-${
        index + 1
      }"><img src="${img.webformatURL}" class="block" alt="${img.tags}"></div>`;
    })
    .join("");
  if (queryObject.page === 1) {
    refs.gallery.innerHTML = "";
  }
  refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);

  macyInstance.runOnImageLoad(function () {
    macyInstance.recalculate(true);
  }, true);
}

export function loadMoreGallery() {
  currentPage.page += 1;
  galleryMarkup({ keyWord: lastSearch, page: currentPage.page });
  macyInstance.reInit();
}
