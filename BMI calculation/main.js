function analyzeHealth() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

 var bmi = calculateBMI(weight, height);
 function calculateBMI(weight, height) {
    height = height / 100;
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    return bmi;
}
    var category = determineBMICategory(bmi);
    function determineBMICategory(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            return "Normal";
        } else if (bmi >= 25 && bmi < 30) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }
    var pc = generatePrescription(bmi, category);
    function generatePrescription(bmi, category) {
        if (category === "Underweight") {
            return "You need to gain weight by eating healthy food.";
        } else if (category === "Normal") {
            return "You are healthy. Keep it up.";
        } else if (category === "Overweight") {
            return "You need to lose weight by exercising and eating healthy food.";
        } else {
            return "You need to lose weight by exercising and eating healthy food.";
        }
    }

    var nam = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    document.getElementById("nameContent").innerHTML = " "+nam;
    document.getElementById("ageContent").innerHTML =" "+age+" years";
    document.getElementById("weightContent").innerHTML = " "+weight+" kg"; 
    document.getElementById("heightContent").innerHTML =" "+height+" m";
    document.getElementById("bmiContent").innerHTML = bmi + " kg/m2";
    document.getElementById("categoryContent").innerHTML = " "+category;
    document.getElementById("suggestionContent").innerHTML = " "+pc+".";
    document.getElementById("dateContent").innerHTML = " "+new Date().toDateString();
    document.getElementById("signatureContent").innerHTML="Dr.John Doe";
   
}
