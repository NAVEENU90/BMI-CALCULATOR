document.getElementById("calcBtn").addEventListener("click", calculateBMI);

function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value) / 100;
    let weight = parseFloat(document.getElementById("weight").value);
    let bmiValue = document.getElementById("bmiValue");
    let bmiComment = document.getElementById("bmiComment");

    if (height > 0 && weight > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        bmiValue.textContent = bmi;

        if (bmi < 18.5) {
            bmiComment.textContent = "Underweight";
            bmiComment.style.color = "#f39c12";
        } else if (bmi < 24.9) {
            bmiComment.textContent = "Normal";
            bmiComment.style.color = "#27ae60";
        } else if (bmi < 29.9) {
            bmiComment.textContent = "Overweight";
            bmiComment.style.color = "#e67e22";
        } else {
            bmiComment.textContent = "Obese";
            bmiComment.style.color = "#c0392b";
        }
    } else {
        bmiValue.textContent = "00.00";
        bmiComment.textContent = "Enter valid height & weight";
        bmiComment.style.color = "#000000ff";
    }
}
