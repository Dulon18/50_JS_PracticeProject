var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText ="BMI Score : "+ parseFloat(BMI.toFixed(2));

    if(BMI < 18.5){
        statement.innerText ="Weight Status : "+ "Opps..!! Your BMI in the Underweight range.";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Weight Status : "+ "Wowww!!!...Your BMI in the Healthy weight range.";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText ="Weight Status : "+  "Your BMI in the Overweight range .You need in maintain healthy diet chart.";
    }else if(BMI>=29.9){
        statement.innerText ="Weight Status : "+ "Your BMI in the Obese range. You need to Improve Your Eating Habits.";
    }
    else{
        statement.innerText="Enter Your Height and Weight First.......";
    }
 
});
