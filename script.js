const messages = [
    "Si sigurna?",
    "Stvarnooo??",
    "Zaštoooo?",
    "Pookie molim te...",
    "Aaaa dajjjjj razmisli o tome!",
    "Ali bit ću jako tužan...",
    "Stvarno jako tužan...",
    "Baš ti hvala sad sam jako jako jako tužan...",
    "Ok uredu, prestat ću pitat...",
    "Šalim se, Molim te reci da!!!!! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}