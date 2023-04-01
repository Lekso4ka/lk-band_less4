let pet = {
    name: "Гоша",
    favorite: false,
    image: "https://laurelpethospital.com/wp-content/uploads/2022/05/Laurel-Pet-Hospital-home-header-image.png"
}
let pet2 = {
    name: "Принцесска",
    favorite: true,
}

const block = document.querySelector(".wrapper");

/*
    <div class="card">
        <div class="pic tmp"></div>
        <h2>Макар</h2>
        <i class="like fa-solid fa-heart"></i>
    </div>
*/
function createCard(pet) {
    const card = document.createElement("div");
    card.className = "card";
    const cardImg = document.createElement("div");
    cardImg.className = "pic";
    if (pet.image) {
        cardImg.style.backgroundImage = `url(${pet.image})`;
    } else {
        cardImg.classList.add("tmp");
    }
    const cardTitle = document.createElement("h2");
    cardTitle.innerText = pet.name;

    const cardLike = document.createElement("i");
    cardLike.className = "like fa-heart";
    cardLike.classList.add(pet.favorite ? "fa-solid" : "fa-regular");
    // fa v5.15.0
    // cardLike.classList.add(pet.favorite ? "fas" : "far");
    card.append(cardImg, cardTitle, cardLike);
    block.append(card);
    console.log(cardImg.offsetWidth);
    cardImg.style.height = cardImg.offsetWidth + "px";
}

createCard(pet);
createCard(pet2);

let name = "lk_band";
let path = `https://cats.petiteweb.dev/api/single/${name}`;

// AJAX - Async JavaScript and XML
// Xhr (XmlHttpRequest => fetch => axios (надо подключать дополнительно))
fetch(path + "/show")
    .then(function(res) {
        console.log(res);
        // Если сервер вернул успешный ответ, попросить отдать данные 
        // .text() => string
        // .blob()
        // .json()
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        if (data.length) {
            for (let pet of data) {
                createCard(pet);
            }
        }
    })


// fetch(path + "/show")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
