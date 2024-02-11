const humbergerMenu = document.getElementsByClassName("humberger-menu")[0];
const menuActive = document.querySelector(".menu-act");

humbergerMenu.addEventListener("click", function(){
    humbergerMenu.classList.toggle("humberger-active");
    menuActive.classList.toggle("menu-active");
});

fetch('data.json')
  .then(response => response.json())
    .then(data => {
    data.menu.forEach(item => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        let image = document.createElement('img');
        image.src = item.gambar;
        image.alt = item.nama;

        let title = document.createElement('h1');
        title.textContent = item.nama;
        
        let description = document.createElement('p');
        description.textContent = item.deskripsi;
        
        let price = document.createElement('p');
        price.textContent = 'Rp ' + item.harga;

        let button = document.createElement('button');
        button.textContent = 'Lihat Detail';

        cardDiv.appendChild(image);
        cardDiv.appendChild(title);
        cardDiv.appendChild(description);
        cardDiv.appendChild(price);
        cardDiv.appendChild(button);
        
        document.querySelector('.container-card').appendChild(cardDiv);
    });
    adjustCardDisplay();
})

.catch(error => console.error('Error loading JSON:', error));

function adjustCardDisplay() {
    let windowWidth = window.innerWidth;
    let cards = document.querySelectorAll('.container-card .card'); // Menghapus .katalog dari pemilihan kelas

    if (windowWidth <= 776) {
        for (let i = 4; i < cards.length; i++) {
            cards[i].style.display = 'none';
        }
    } else {
        cards.forEach(card => {
            card.style.display = 'flex';
        });
    }

    return cards;
}


