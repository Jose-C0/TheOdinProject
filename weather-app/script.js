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

let arrayCity = [];

function findCity() {
  fetch("./current.city.list.json")
    .then((response) => {
      //console.log(response.json());
      return response.json();
    })
    .then((response) => {
      response.forEach((x, index) => {
        //  This function is to create a list of all the countries in the form.
        if (index <= 5000) {
          arrayCity.push(x.name);

          const option = document.createElement("option");
          option.innerHTML = `<option value="${x.name}">${x.name}</option>`;

          citySelect.appendChild(option);
        }
      });
    });
}

findCity();

async function main() {
  citySelect.addEventListener("change", (e) => {
    getWeather(citySelect.value);
  });
}

main();
