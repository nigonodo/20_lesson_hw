const apiKye = "bac0e9b126cffe150b56671bd67e133b";

const myButton = document.getElementById("getWeatherButton");
const locationInput = document.getElementById("locationInput");
const weatherContainer = document.getElementById("weatherContainer");

getWeatherButton.onclick = () => {
  const location = locationInput.value.trim();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKye}&units=metric`
  )
    .then((res) => res.json())
    .then(
      ({
        name,
        main: { temp },
        weather: [{ description, icon }],
        wind: { speed },
      }) => {
        weatherContainer.innerHTML = `
            <h2>
            ${name} <img id="styleIcon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${icon}" />
            </h2>
            <p>${temp}°C</p>
            <p>${description}</p>
            <p>${speed} m/s</p>
            `;
            
            const styleIcon=document.getElementById("styleIcon")

            styleIcon.style.width = "150px";
            styleIcon.style.height= "150px";
            


      }
    );
};
