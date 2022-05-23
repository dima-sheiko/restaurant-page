function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = `📞 123 456 789`;

    const adress = document.createElement("p");
    adress.textContent = `🏠 SpongeBob Alley, Bikini Bottom, USA`;

    contact.appendChild(phoneNumber);
    contact.appendChild(adress);

    return contact;
}

function loadContact() {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;