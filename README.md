# Equis - BMI Calculator

A clean, responsive, and dynamic **BMI (Body Mass Index) Calculator** built with HTML5, CSS3, and Vanilla JavaScript. This application provides real-time health feedback by calculating a user's BMI based on weight and height, then visually adapting the interface to match the health category result.

### Live Preview : https://equis-bmi.netlify.app/

---

### Features
* **Dynamic UI:** The entire theme (background, buttons, and text) changes color based on the BMI result (e.g., green for healthy, red for high risk).
* **Real-time Calculation:** Uses standard BMI formulas to provide immediate feedback.
* **Responsive Design:** Styled with the Poppins font and a mobile-friendly layout for all screen sizes.
* **Health Messaging:** Provides specific advice based on the calculated category, ranging from "Underweight" to "Severely Obese".



---

### Technologies Used
* **HTML5:** Structured the form and result containers.
* **CSS3:** Utilized Flexbox for centering, Google Fonts for typography, and smooth transitions for color changes.
* **JavaScript (ES6):** Handled DOM manipulation, form submission logic, and the mathematical calculation.

---

### How It Works
The app calculates BMI using the metric formula:

$$BMI = \frac{weight(kg)}{height(m)^2}$$

The logic categorizes the result into one of five stages:

| BMI Range | Category | Theme Color |
| :--- | :--- | :--- |
| < 18.5 | Underweight | Blue |
| 18.5 – 24.9 | Healthy | Green |
| 25.0 – 29.9 | Overweight | Yellow |
| 30.0 – 34.9 | Obese (Class I) | Orange |
| ≥ 35.0 | Severely Obese | Red |

---

### File Structure
* `index.html`: Contains the input form and result display divs.
* `style.css`: Defines the aesthetics, including the @import for Poppins and custom styling for the container.
* `script.js`: Contains the calculateBmi() function and the event listener for the form submission.

---

### Setup
1. Clone this repository.
2. Open `index.html` in any modern web browser.
3. Enter your weight in kilograms and height in centimeters.
4. Click **Calculate** to see your results!