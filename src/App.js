import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const [feet, setFeet] = useState();
  const [inch, setInch] = useState();
  const [message, setMessage] = useState("");

  function feetToMeter(feet, inch) {
    let height = feet * 0.3048 + inch * 0.0254;
    return height;
  }

  function validateInput(a) {
    let isValid = a.length < 0 || a < 20;

    console.log(isValid);

    return isValid;
  }

  let calBmi = (e) => {
    e.preventDefault();
    let weight = parseFloat(document.getElementById("weight").value);
    let height = feetToMeter(feet, inch);
    if (
      isNaN(weight) ||
      isNaN(height) ||
      validateInput(weight)
      //||!validateInput(height)
    ) {
      alert("Kindly enter valid wieght and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));

      if (bmi <= 18.5) {
        setMessage("This is described as underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("This is described as the ‘healthy range’.");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setMessage("This is described as overweight");
      } else if (bmi >= 30 && bmi <= 39.9) {
        setMessage("This is described as obesity");
      } else {
        setMessage("This is described as severe obesity");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      {
        <form className="bmiForm" id="bmiForm" onSubmit={calBmi}>
          <h4 className="bmiHeading">BMI Calculator</h4>
          <div className="mb-3">
            <label className="form-label" id="p1" for="weight">
              Weight(KG)
            </label>
            <input
              type="text"
              placeholder="Enter weight"
              value={weight}
              className="form-control"
              onChange={(e) => setWeight(e.target.value)}
              id="weight"
              aria-describedby="weight"
            />
            <div className="form-text">
              Minimum weight can not be less than 20
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" id="p1" for="height">
              Height
            </label>
            <div className="height">
              <label>Feet</label>
              <input
                type="number"
                min="4"
                max="8"
                placeholder="Eg. 4"
                className="form-control"
                id="short"
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
                aria-describedby="height"
              />
            </div>

            <div className="height">
              <label>Inch</label>
              <input
                type="number"
                max="11"
                placeholder="Eg. 10"
                className="form-control"
                id="short"
                value={inch}
                onChange={(e) => setInch(e.target.value)}
                aria-describedby="height"
              />
            </div>

            <div className="form-text">
              Minimum height 4 feet & maximum height 8 feet
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div>
            <button type="reset" onClick={reload} className="btn btn-light">
              Reload
            </button>
          </div>
          <div>
            <p className="bmiHeading" id="p1">
              Your BMI is:{bmi}
            </p>
            <p style={{ textAlign: "center" }}>{message}</p>
          </div>
        </form>
      }
    </div>
  );
}

export default App;
