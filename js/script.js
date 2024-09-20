const reviewSection = document.getElementById('review');
const reviewContainer = reviewSection.querySelector('.container');
for (let i = 0; i < reviews.length; i++) {
    let element = document.createElement('div');
    element.className = 'mb-4';

    let rating = '';
    for (let k = 0; k < reviews[i].rating; k++)
        rating += '★';
    rating = '<p style="color: #ffb61b; margin: 0;">' + rating + '</p>'
    element.innerHTML = `
        <div class="reviews px-md-4 py-md-3 my-2">
        ` + rating + `<b style="color: white;">` + reviews[i].name + `</b>` + `
        <p class="comment my-1">` + reviews[i].comment + `</p>
        </div>
    `;

    reviewContainer.appendChild(element);
}

const productContainer = document.getElementById('product-container');
for (let i = 0; i < products.length; i++) {
    let element = document.createElement('div');
    element.className = 'my-card mb-3';
    element.innerHTML = `
        <img src="${products[i].img}" alt="" srcset="">
        <div class="card-tag flexbox">
            <h4 class="flexbox">
                <span>${products[i].tag}<span>
            </h4>    
        </div>
        <div class="card-content pb-1">
            <h3 class="my-card-title">${products[i].name}</h3>
            <div class="flexbox mb-3 mt-2" style="justify-content: space-between;">
                <p class="my-card-price m-0">$${products[i].price}</p>
                <div class="cart-icon flexbox">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
    `;

    productContainer.appendChild(element);
}

const gamesContainer = document.getElementById('games-container');
for (let i = 0; i < games.length; i++) {
    let element = document.createElement('div');
    element.className = 'my-card my-0 flexbox';
    element.style.position = 'relative';

    let a = games[i].name.split(' ')[0];
    let b = games[i].name.split(' ')[1];
    element.innerHTML = `
        <img src="${games[i].img}" alt="" width="100%">
        <div class="tag mx-4">
            <span>${games[i].category}</span>
        </div>
        <div class="content px-4 py-3">
            <h3 class="mt-2">${a} <span class="golden-text">${b}</span></h3>
            <button class="play-btn mb-2 mt-1">
                <span>PLAY NOW</span>
            </button>
        </div>
    `;

    gamesContainer.appendChild(element);
}
