const button = document.querySelector(".container button");
const jokes = document.querySelector(".container .joke p");
document.addEventListener("DOMContentLoaded", getJoke);
button.addEventListener("click", getJoke);
async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });

  const joke_obj = await jokeData.json();
  jokes.innerHTML = joke_obj.joke;
  console.log(jokeData);
}
