
const pageTitle = document.getElementById("page-title");

const subtitle = document.getElementById("subtitle");

const changeTitleBtn = document.getElementById("change-title-btn");

const colorBtn = document.getElementById("color-btn");

const addCardBtn = document.getElementById("add-card-btn");

const clearCardsBtn = document.getElementById("clear-cards-btn");

const addCustomCardBtn = document.getElementById("add-custom-card-btn");

const customTextInput = document.getElementById("custom-text-input");

const cardsContainer = document.getElementById("cards-container");

const subtitleColorBtn = document.getElementById("subtitle-color-btn");

const fontBiggerBtn = document.getElementById("font-bigger-btn");

const fontSmallerBtn = document.getElementById("font-smaller-btn");

const toggleCardsBtn = document.getElementById("toggle-cards-btn");

const rotateTitleBtn = document.getElementById("rotate-title-btn");



changeTitleBtn.addEventListener("click", () => {
    if (pageTitle.innerText === "Welcome to My DOM Lab") {
        pageTitle.innerText = "You Just Changed the Title!";
        subtitle.innerText = "Nice! You're controlling the DOM.";
    } else {
        pageTitle.innerText = "Welcome to My DOM Lab";
        subtitle.innerText = "Press the buttons to interact with the page!";
    }
});


colorBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = randomColor;
});


function buildCard(text) {
    const card = document.createElement("div");
    card.classList.add("card");

    const content = document.createElement("p");
    content.innerText = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";


    deleteBtn.addEventListener("click", () => {
        card.remove();
    });

    card.appendChild(content);
    card.appendChild(deleteBtn);

    return card;
}

addCardBtn.addEventListener("click", () => {
    const card = buildCard("This is a new card created by JavaScript!");
    cardsContainer.appendChild(card);
});


addCustomCardBtn.addEventListener("click", () => {
    const value = customTextInput.value.trim();
    if (!value) return;

    const card = buildCard(value);
    cardsContainer.appendChild(card);

    customTextInput.value = "";
});


clearCardsBtn.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
});

subtitleColorBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    subtitle.style.color = randomColor;
});


fontBiggerBtn.addEventListener("click", () => {
    let currentSize = parseInt(window.getComputedStyle(pageTitle).fontSize);
    pageTitle.style.fontSize = (currentSize + 4) + "px";
});


fontSmallerBtn.addEventListener("click", () => {
    let currentSize = parseInt(window.getComputedStyle(pageTitle).fontSize);
    if (currentSize > 8) { 
        pageTitle.style.fontSize = (currentSize - 4) + "px";
    }
});


let cardsVisible = true;
toggleCardsBtn.addEventListener("click", () => {
    cardsVisible = !cardsVisible;
    cardsContainer.style.display = cardsVisible ? "block" : "none";
    toggleCardsBtn.innerText = cardsVisible ? "Hide Cards" : "Show Cards";
});

let rotated = false;
rotateTitleBtn.addEventListener("click", () => {
    rotated = !rotated;
    pageTitle.style.transform = rotated ? "rotate(5deg)" : "rotate(0deg)";
});