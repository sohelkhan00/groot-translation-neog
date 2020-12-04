const apiUrl = "https://api.funtranslations.com/translate/groot.json";
//const apiUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function urlCreator(text) {
  return `${apiUrl}?text=${text}`;
}

const input = document.querySelector("#input");
const outputText = document.querySelector("#output");
const btn = document.querySelector("#btn-translate");

btn.addEventListener("click", () => {
  const inputText = input.value;
  const url = urlCreator(inputText);
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      outputText.innerHTML = json.contents.translated;
    })
    .catch((err) => {
      console.log(err);
    });
});
