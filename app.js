import { getListHadithBooks } from "./src/main.js";
import { headerScroll } from "./src/dom.js"

document.addEventListener('DOMContentLoaded', () => {
    getListHadithBooks();
    headerScroll();
});