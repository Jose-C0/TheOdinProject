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

  divContainer.appendChild(setP("Name: " + data.location.name) );
 
  divContainer.appendChild(setP("Country: " + data.location.country));
  divContainer.appendChild(setP("Lat: " + data.location.lat));
  divContainer.appendChild(setP("Localtime: " + data.location.localtime));
  divContainer.appendChild(
    setP("Localtime_epoch: " + data.location.localtime_epoch)
  );
  divContainer.appendChild(setP("Lon: " + data.location.lon));
  divContainer.appendChild(setP("Region: " + data.location.region));
  divContainer.appendChild(setP("Tz_id: " + data.location.tz_id));

  //Todo: img.src = data.data.images.original.url;
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
