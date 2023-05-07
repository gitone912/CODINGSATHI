
document.getElementById("convertBtn").onclick = convert;

function convert() {
  var temperature = document.getElementById("temperature").value;
  var unit = document.getElementById("unit").value;

  if (!temperature || isNaN(temperature)) {
    alert("Please enter a valid temperature.");
    return;
  }

  var convertedTemp;

  if (unit === "celsius") {
    convertedTemp = (parseFloat(temperature) * 9 / 5) + 32;
  } else if (unit === "fahrenheit") {
    convertedTemp = (parseFloat(temperature) - 32) * 5 / 9;
  } else if (unit === "kelvin") {
    convertedTemp = parseFloat(temperature) - 273.15;
  }

  document.getElementById("convertedTemp").textContent = convertedTemp.toFixed(2);
}