const celsiusTemp = document.getElementById("celsius");
const fahrenheitTemp = document.getElementById("fahrenheit");
const kelvinTemp = document.getElementById("kelvin");

function formatNumber(number) {
  return number.toFixed(2);
}

function calcularTemperatura(event) {
  event.preventDefault();
  const valorActual = +event.target.value;
  let celsius, fahrenheit, kelvin;

  switch (event.target.name) {
    case "celsius":
      fahrenheit = (valorActual * 9) / 5 + 32;
      kelvin = valorActual + 273.15;
      fahrenheitTemp.value = formatNumber(fahrenheit);
      kelvinTemp.value = formatNumber(kelvin);
      break;
    case "fahrenheit":
      celsius = ((valorActual - 32) * 5) / 9;
      kelvin = ((valorActual - 32) * 5) / 9 + 273.15;
      celsiusTemp.value = formatNumber(celsius);
      kelvinTemp.value = formatNumber(kelvin);
      break;
    case "kelvin":
      celsius = valorActual - 273.15;
      fahrenheit = ((valorActual - 273.15) * 9) / 5 + 32;
      celsiusTemp.value = formatNumber(celsius);
      fahrenheitTemp.value = formatNumber(fahrenheit);
      break;
    default:
      break;
  }
}
