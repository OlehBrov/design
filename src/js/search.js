import { toggleSearch } from "..";
import { galleryMarkup } from "./gallery";
import refs from "./refs";
const input = {
  query: "",
};
export let lastSearch = "garden";

export function inputHandler(e) {
  input.query = e.target.value;

}

export async function searchHandler(e) {
  e.preventDefault();
  toggleSearch();
  lastSearch = "";
  await galleryMarkup({ keyWord: input.query, page: 1 });
  lastSearch = input.query;
    input.query = "";
    refs.headerSearchInput.value = ''
}
