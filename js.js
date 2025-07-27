function convertTemperature() {
  const inputValue = document.getElementById('temperatureInput').value;
  const inputUnit = document.getElementById('inputUnit').value;
  const output = document.querySelector('input[name="output"]:checked').value;
  const resultDisplay = document.getElementById('resultDisplay');

  if (inputValue === '' || isNaN(inputValue)) {
    resultDisplay.innerHTML = "❌ Please enter a valid number.";
    return;
  }

  const temp = parseFloat(inputValue);
  let convertedTemp;

  let tempInCelsius;
  if (inputUnit === 'C') {
    tempInCelsius = temp;
  } else if (inputUnit === 'F') {
    tempInCelsius = (temp - 32) * 5/9;
  } else if (inputUnit === 'K') {
    tempInCelsius = temp - 273.15;
  }

  if (output === 'C') {
    convertedTemp = tempInCelsius;
  } else if (output === 'F') {
    convertedTemp = (tempInCelsius * 9/5) + 32;
  } else if (output === 'K') {
    convertedTemp = tempInCelsius + 273.15;
  }

  resultDisplay.innerHTML = `Result: ${convertedTemp.toFixed(2)} °${output}`;
}
