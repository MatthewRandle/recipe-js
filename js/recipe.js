const urlParams = new URLSearchParams(window.location.search);
const recipeID = urlParams.get("recipeID");

const recipe = recipes[recipeID - 1];
let servings = recipe.servings;
let showingIngredients = true;

renderRecipe();
renderIngredients();

function toggleView(e) {
    if(showingIngredients && e.target.id === "directionButton") {
        showingIngredients = false;
        document.getElementById("directionButton").classList.add("recipe_content_topBar--chosen");
        document.getElementById("ingredientButton").classList.remove("recipe_content_topBar--chosen");
        renderDirections();
    }
    else if(!showingIngredients && e.target.id === "ingredientButton") {
        showingIngredients = true;
        document.getElementById("ingredientButton").classList.add("recipe_content_topBar--chosen");
        document.getElementById("directionButton").classList.remove("recipe_content_topBar--chosen");
        renderIngredients();
    }
}

function markIngredient(id) {
    let ingredient = document.getElementById(id);

    if (ingredient.style.textDecoration === "none" || ingredient.style.textDecoration == "") {
        ingredient.style.textDecoration = "line-through";
        ingredient.parentNode.querySelector("button").innerText = "Un-mark";
    }
    else {
        ingredient.style.textDecoration = "none";
        ingredient.parentNode.querySelector("button").innerText = "Mark off";
    }
}

function renderIngredients() {
    if(recipe && recipe.ingredients && recipe.ingredients.length && Array.isArray(recipe.ingredients)) {
        let contentContainer = document.getElementById("recipe_content");
        contentContainer.innerHTML = "";

        recipe.ingredients.forEach((ingredient, i) => {
            let container = document.createElement("div");
            container.className = "recipe_ingredient";

            let servingsText = document.createElement("h3");
            servingsText.innerText = new Fraction(ingredient.quantity * servings).toFraction(true);

            let name = document.createElement("p");
            name.id = "ingredient-" + i;
            name.innerText = ingredient.name;
            
            let button = document.createElement("button");
            button.innerText = "Mark off";
            button.onclick = () => markIngredient("ingredient-" + i);

            container.appendChild(servingsText);
            container.appendChild(name);
            container.appendChild(button);

            contentContainer.appendChild(container);
        });
    }
}

function markDirection(id) {
    let direction = document.getElementById(id);

    if (direction.style.textDecoration === "none" || direction.style.textDecoration == "") {
        direction.style.textDecoration = "line-through";
        direction.parentNode.querySelector("button").innerText = "Un-mark";
    }
    else {
        direction.style.textDecoration = "none";
        direction.parentNode.querySelector("button").innerText = "Mark off";
    }
}

function renderDirections() {
    if (recipe && recipe.directions && recipe.directions.length && Array.isArray(recipe.directions)) {
        let contentContainer = document.getElementById("recipe_content");
        contentContainer.innerHTML = "";

        recipe.directions.forEach((direction, i) => {
            let container = document.createElement("div");
            container.className = "recipe_direction";

            let step = document.createElement("h3");
            step.innerText = i + 1;

            let text = document.createElement("p");
            text.id = "direction-" + i;
            text.innerText = direction;

            let button = document.createElement("button");
            button.innerText = "Mark off";
            button.onclick = () => markDirection("direction-" + i);

            container.appendChild(step);
            container.appendChild(text);
            container.appendChild(button);

            contentContainer.appendChild(container);
        });
    }
}

function renderRecipe() {
    if(!recipe) return;

    let recipeHeroContent = document.getElementsByClassName("recipe_hero_content")[0];

    let h1 = document.createElement("h1");
    h1.innerText = recipe.title;

    let author = document.createElement("p");
    author.innerText = recipe.author.name;

    let description = document.createElement("p");
    description.innerText = recipe.description;


    //insert the content before the recipe_hero_info div
    recipeHeroContent.insertBefore(author, recipeHeroContent.firstChild);
    recipeHeroContent.insertBefore(description, recipeHeroContent.firstChild);
    recipeHeroContent.insertBefore(h1, recipeHeroContent.firstChild);

    //servings
    let servingsInputContainer = document.getElementById("servingsContainer");

    let servingsInput = document.createElement("input");
    servingsInput.type = "number";
    servingsInput.value = servings;
    //update servings when value is changed, and re-render
    servingsInput.onchange = e => {
        servings = e.target.value;
        if(showingIngredients) renderIngredients(); //if we are currently viewing ingredients, update them now
    }
    servingsInputContainer.appendChild(servingsInput);

    let recipeImage = document.getElementById("recipe_image");
    recipeImage.style.background = `url("/images/recipes/${recipe.id}.jpg")`;

    /* Cookie & prep time */
    let recipeInfo = document.getElementById("recipe_info");

    if(recipe.prep_time_min) {
        let prepTimeContainer = document.createElement("div");
        prepTimeContainer.className = "recipe_hero_info_row";
        prepTimeContainer.innerHTML = `
            <h3>Prep Time</h3>
            <p>${recipe.prep_time_min} mins</p>
        `;

        recipeInfo.appendChild(prepTimeContainer);
    }

    if (recipe.cook_time_min) {
        let cookTimeContainer = document.createElement("div");
        cookTimeContainer.className = "recipe_hero_info_row";
        cookTimeContainer.innerHTML = `
            <h3>Cook Time</h3>
            <p>${recipe.cook_time_min} mins</p>
        `;

        recipeInfo.appendChild(cookTimeContainer);
    }
}