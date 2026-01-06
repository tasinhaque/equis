let labels = document.querySelectorAll("label");

let height = document.getElementById("height");
let weight = document.getElementById("weight");

let form = document.querySelector("form");
let btn = document.querySelector("#btn");

let category = document.querySelector("#category");
let message = document.querySelector("#message");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(height.value !== "" && weight.value !== ""){
        calculateBmi();
    }
    
})


function calculateBmi(){
    let bmi = (Number(weight.value) / Math.pow((Number(height.value)/100), 2)).toFixed(1);
    let bmiContainer = document.getElementById("bmi");
    bmiContainer.innerText = bmi;
    height.value = "";
    weight.value = "";
    weight.focus();

    if(bmi < 18.5){
        document.body.style.backgroundColor = "#3498db";
        btn.style.backgroundColor = "#3498db";
        labels.forEach(label => label.style.color = "#3498db");
        bmiContainer.style.color = "#3498db";
        category.style.color = "#3498db";
        message.style.color = "#3498db";
        category.innerText = "Underweight";
        message.innerText = "Your BMI is low. Consider consulting a nutritionist";

    }
    else if( bmi >= 18.5 && bmi <= 24.9){
        document.body.style.backgroundColor = "#2ecc71";
        category.innerText = "Healthy";
        message.innerText = "Great job! Your BMI is within the ideal range";
        btn.style.backgroundColor = "#2ecc71";
        labels.forEach(label => label.style.color = "#2ecc71");
        bmiContainer.style.color = "#2ecc71";
        category.style.color = "#2ecc71";
        message.style.color = "#2ecc71";

    }
    else if( bmi >= 25 && bmi <= 29.9){
        document.body.style.backgroundColor = "#f1c40f";
        category.innerText = "Overweight";
        message.innerText = "You are slightly above the ideal range for your height";
        btn.style.backgroundColor = "#f1c40f";
        labels.forEach(label => label.style.color = "#f1c40f");
        bmiContainer.style.color = "#f1c40f";
        category.style.color = "#f1c40f";
        message.style.color = "#f1c40f";

    }
    else if(bmi >= 30.0 && bmi <= 34.9){
        document.body.style.backgroundColor = "#e67e22";
        category.innerText = "Obese (Class I)";
        message.innerText = "Your BMI indicates a higher health risk";
        btn.style.backgroundColor = "#e67e22";
        labels.forEach(label => label.style.color = "#e67e22");
        bmiContainer.style.color = "#e67e22";
        category.style.color = "#e67e22";
        message.style.color = "#e67e22";
    }
    else if(bmi >= 35){
        document.body.style.backgroundColor = "#e74c3c";
        category.innerText = "Severely Obese";
        message.innerText = "Your BMI is in a high-risk category. Seek medical advice";
        btn.style.backgroundColor = "#e74c3c";
        labels.forEach(label => label.style.color = "#e74c3c");
        bmiContainer.style.color = "#e74c3c";
        category.style.color = "#e74c3c";
        message.style.color = "#e74c3c";
    }
}
