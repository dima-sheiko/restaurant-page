function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "Fårikål", 
            "Mutton and cabbage are added to water and seasoned with salt and pepper. The stew is then cooked on the stove for several hours until the meat and cabbage are tender."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Lapskaus", 
            "The meat and vegetables are boiled until they are tender. Once the juices are running and the dish is piping hot, lapskaus is normally served with flatbread and butter."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Kjøttkaker", 
            "Kjøttkaker are balls of minced beef, rolled with spices like nutmeg, pepper, and ginger. This gives them a spicy flavor and an aromatic quality."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Raspeball", 
            "Flour is mixed with boiled potatoes and mashed into a big ball of goodness. The mixture is then cooked on low heat."
        )
    );

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodImg = document.createElement("img");
    foodImg.src = `images/menu/${name.toLowerCase()}.jpg`;
    foodImg.alt = "food image";

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodImg);    
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);  
    
    return menuItem;
}

function loadMenu() {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;

