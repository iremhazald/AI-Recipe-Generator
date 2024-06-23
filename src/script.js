function displayRecipe(response) {
  new Typewriter("#recipeText", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let userInput = document.querySelector("#searchInput");
  let apiKey = "1e4573e080b57c89fadd0873aeof420t";
  let context =
    "You are an opinionated AI Assistant who has a lot knowledge about gastronomy and has traveled all around the world. You love cooking and know many recipes. You mission is to generate recipes very shortly in basic HTML. Make sure to follow the user instructions. Sign the recipe with 'IHD AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let prompt = `User instructions : Generate a recipe about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipeText");

  recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe about ${userInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipeForm");
recipeForm.addEventListener("submit", generateRecipe);
