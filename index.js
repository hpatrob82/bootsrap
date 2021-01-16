'use script';


function updateBody(quote) {
    const paragraph = document.querySelector('div #modal-body p');
    paragraph.innerHTML = quote;

}




const form = document.querySelector('#changeQuote');
const categorySelect = document.createElement('select'); {
    const categoryOption = document.createElement('option');


};


categorySelect.addEventListener('change', function(event) {
    getQuote(event.target.value);
})