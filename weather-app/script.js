const divContainer = document.querySelector(".container");

function setP(property) {
  const p = document.createElement("p");
  p.textContent = property;
  return p;
}

const getWeather = async () => {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=fc5fe7e276864dcd96b42231240403 &q=London&aqi=no",
    { mode: "cors" }
  );
  const data = await response.json();
  
  console.log(data);

  divContainer.appendChild(setP("name: " + data.location.name));
  divContainer.appendChild(setP("country: " + data.location.country));
  divContainer.appendChild(setP("lat: " + data.location.lat));
  divContainer.appendChild(setP("localtime: " + data.location.localtime));
  divContainer.appendChild(setP("localtime_epoch: " + data.location.localtime_epoch));
  divContainer.appendChild(setP("lon: " + data.location.lon));
  divContainer.appendChild(setP("region: " + data.location.region));
  divContainer.appendChild(setP("tz_id: " + data.location.tz_id));
};

getWeather();

/*
const img = document.querySelector("img");

async function getCats() {
  const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=4VR9IjvvONKqegzFWT7XbQonkiX3500w&s=cats", { mode: "cors" });
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}

getCats();
*/
