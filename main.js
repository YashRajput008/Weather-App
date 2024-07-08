import { getWeather } from "./weather";

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
  (res) => {
    console.log(res.data);
    // Process and display the weather data here
  }
);

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.querySelector(".search-input").value;
  // Fetch weather data for the input city here
});
