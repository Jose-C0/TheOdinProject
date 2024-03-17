const divContainer = document.querySelector(".container");
const citySelect = document.getElementById("city-select");
const myForm = document.getElementById("myForm");

function setP(property) {
  const p = document.createElement("p");
  p.textContent = property;
  return p;
}
let setResult = (data) => {
  divContainer.innerHTML = "";
  divContainer.appendChild(setP("Name: " + data.location.name));
  divContainer.appendChild(setP("Country: " + data.location.country));
  divContainer.appendChild(setP("Lat: " + data.location.lat));
  divContainer.appendChild(setP("Localtime: " + data.location.localtime));
  divContainer.appendChild(
    setP("Localtime_epoch: " + data.location.localtime_epoch)
  );
  divContainer.appendChild(setP("Lon: " + data.location.lon));
  divContainer.appendChild(setP("Region: " + data.location.region));
  divContainer.appendChild(setP("Tz_id: " + data.location.tz_id));
};

const getWeather = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=fc5fe7e276864dcd96b42231240403 &q=${city}&aqi=no`,
    { mode: "cors" }
  );

  const data = await response.json();

  return setResult(data);
};

let listaPara = [];
/*
async function ejemplo() {
  //current.city.list
  const response = await fetch("./current.city.list.json");

  const name = await response.json();

  name.forEach((x) => {
    listaPara.push(x.name);
        // Esta funcion es para crear una lista de todos los paises en el formulario

    const option = document.createElement("option");
    option.innerHTML = `<option value="${x.name}">${x.name}</option>`;

    citySelect.appendChild(option);
  });

  console.log(listaPara);

  
}
*/

ejemplo();

async function mo() {
  citySelect.addEventListener("click", (e) => {
    console.log(citySelect.value);
    //getWeather(citySelect.value);
  });
}

mo();
