let currentURL = window.location.href
let fileName = currentURL.split('/').pop();
let fileNameWithoutExtension = fileName.replace(/\.html$/, '');
const urlAPI = 'https://api.hadith.gading.dev/books';
let arrayHadiths

export function getListHadithBooks() {
    const listHadithBooks = document.getElementById('list-hadith-books');
    const coverBooks = [
        '../public/images/abu-daud.jpg',
        '../public/images/ahmad.jpg',
        '../public/images/bukhari.jpg',
        '../public/images/darimi.jpg',
        '../public/images/ibnu-majah.jpg',
        '../public/images/malik.jpg',
        '../public/images/muslim.jpg',
        '../public/images/nasai.jpg',
        '../public/images/tirmidzi.jpg',
    ]
    
    axios.get(urlAPI)
        .then(function(res) {
            let hadithBooks = res.data.data.map((hadith, index) => {
                return `
                <div class="card text-center border-0 shadow bg-body-transparant rounded">
                    <div class="card-body">
                        <img class="w-100 object-fit-cover mb-4" src="${coverBooks[index]}" alt="">
                        <h2 class="card-title">${hadith.name}</h2>
                        <p class="card-text">Jumlah Hadits : <b>${hadith.available}</b></p>
                        <a href="../src/page/${hadith.id}.html" class="btn btn-primary w-75">Selengkapnya</a>
                    </div>
                </div>`
        }).join("");

    listHadithBooks.innerHTML = hadithBooks;
    });
}

export function getListHadiths() {
    const listHadiths = document.getElementById('list-hadiths');
    listHadiths.innerHTML = '';

    axios.get(`${urlAPI}/${fileNameWithoutExtension}?range=1-300`)
        .then(function(res) {
            arrayHadiths = res.data.data.hadiths
            let hadiths = arrayHadiths.map(hadith => {
                return `
                <div class="card border-0 shadow rounded">
                    <div class="card-header bg-success-subtle d-flex justify-content-between">
                        <h2 class="card-title"> Hadits No : ${hadith.number}</h2>
                        <button title="Bookmark" type="button" style="outline: none; border: none; background-color: transparent;"><i class="fa-solid fa-bookmark fs-4"></i></button>
                    </div>
                    <div class="card-body">
                        <p class="card-text text-end">${hadith.arab}</p>
                        <p class="card-text">${hadith.id}</p>
                    </div>
                </div>`
            }).join("");

            listHadiths.innerHTML = hadiths;
        });
}

export const searchHadiths = searchValue => {
    const listHadiths = document.getElementById('list-hadiths');
    listHadiths.innerHTML = '';

    axios.get(`${urlAPI}/${fileNameWithoutExtension}?range=1-300`)
        .then(function(res) {

            let getSearchHadiths = res.data.data.hadiths.filter((searchHadith) => {
                return searchHadith.id.toLowerCase().includes(searchValue.toLowerCase())
            })

            listHadiths.innerHTML = getSearchHadiths.map((hadith) => {
                return `
                <div class="card border-0 shadow rounded">
                    <div class="card-header bg-success-subtle">
                        <h2 class="card-title"> Hadits No : ${hadith.number}</h2>
                    </div>
                    <div class="card-body">
                        <p class="card-text text-end">${hadith.arab}</p>
                        <p class="card-text">${hadith.id}</p>
                    </div>
                </div>`
            }).join("");
        })
}

export function searchTitleView(searchTitleValue) {
    const searchTitle = document.getElementById('search-title');

    searchTitle.innerHTML = ` : ${searchTitleValue}`
}

export function searchEmpty() {
    const listHadiths = document.getElementById('list-hadiths');

    listHadiths.innerHTML = '<h1 class="fs-1" style="margin-top: 9rem;">Isi Dahulu Input Search<h1>'
}