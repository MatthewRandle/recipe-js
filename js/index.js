let chosenTags = [];

let recipesContainer = document.getElementById("recipes");
let tagsContainer = document.getElementById("tags");

renderRecipes(true);
renderTags();

function renderRecipes() {
    if (!recipesContainer || !recipes) return;

    recipesContainer.innerHTML = "";

    let filtered = recipes;

    //there are chosen tags, so filter them out
    if (chosenTags.length > 0) filtered = recipes.filter(recipe => {
        return chosenTags.some(value => recipe.tags.includes(value));
    });

    filtered.forEach(recipe => {
        let preview = document.createElement("a");
        preview.href = "/recipe/?recipeID=" + recipe.id;
        preview.className = "recipe_preview";
        preview.style.background = `linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5) ), url("/images/recipes/${recipe.id}.jpg")`; //add the image

        let text = document.createElement("p");
        text.innerText = recipe.title;

        preview.appendChild(text);
        recipesContainer.appendChild(preview);
    });
}

function renderTags() {
    if (!tags || !tagsContainer) return;

    tagsContainer.innerHTML = "";

    tags.forEach(tag => {
        let newTag = document.createElement("li");
        newTag.className = chosenTags.includes(tag) ? "filterTag--active" : "filterTag";
        newTag.onclick = () => {
            if (chosenTags.includes(tag)) chosenTags = chosenTags.filter(currentTag => currentTag !== tag); //already in array, so filter out
            else chosenTags = [...chosenTags, tag]; //add new tag to array

            renderTags();
            renderRecipes();
        };
        newTag.innerText = tag;

        tagsContainer.appendChild(newTag);
    });
}