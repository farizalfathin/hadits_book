import { getListHadiths, searchEmpty, searchHadiths, searchTitleView } from "../main.js";

document.addEventListener('DOMContentLoaded', () => {
    getListHadiths();

    document.getElementById('search-button').addEventListener(('submit'), e => {
        const inputSearchHadiths = document.getElementById('input-search-hadiths');
        e.preventDefault();

        if(inputSearchHadiths.value.length > 0) {
            searchHadiths(inputSearchHadiths.value)
            searchTitleView(inputSearchHadiths.value)
        }else if(inputSearchHadiths.value === '' ) {
            searchEmpty();
            document.getElementById('search-title').innerHTML = '';
        }
    });
    
    document.getElementById('button-reset').addEventListener(('click'), () => {
        getListHadiths();
        document.getElementById('search-title').innerHTML = '';
    })
});