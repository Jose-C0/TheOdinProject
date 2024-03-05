const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=4VR9IjvvONKqegzFWT7XbQonkiX3500w&s=cats",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
