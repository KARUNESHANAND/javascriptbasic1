var weight = prompt("Enter your weight.(kg)");
var height = prompt("Enter your height(m).");
function bmiCalculator(weight, height) {
    var bmi = Math.round((weight)/(height**2));
    return bmi;
    
} 

var bmiFinal = bmiCalculator(weight,height);
console.log(bmiFinal);