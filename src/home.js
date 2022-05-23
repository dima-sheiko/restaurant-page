function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const chiefImage = document.createElement("img");
    chiefImage.src = "images/chef.png"
    chiefImage.alt = "Chef";

    home.appendChild(createParagraph("Best Norwegian restaurant in your area"));
    home.appendChild(createParagraph("Food with a Norwegian soul"));
    home.appendChild(chiefImage);
    home.appendChild(createParagraph("Order online or visit us!"));

    return home;
}

function createParagraph (text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;