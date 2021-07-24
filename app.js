const celciusInput = document.getElementById("celcius")
const fahrenheitInput = document.getElementById("fahrenheit")

const inputs = document.getElementsByClassName("input")

for (let i=0; i<inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function(e) {
    let value = e.target.value;
    
    switch (e.target.name) {
      case "celcius":
        fahrenheitInput.value = ((value * 1.8) + 32).toFixed(2);
        break;
    
      case "fahrenheit":
        celciusInput.value = ((value - 32) / 1.8).toFixed(2);
          break;
      default:
        break;
    }
  });
}