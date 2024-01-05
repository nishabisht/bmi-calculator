import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {
        <form className="bmiForm">
          <h4 className="bmiHeading">BMI Calculator</h4>
          <div className="mb-3">
            <label className="form-label" id="p1" for="weight">
              Weight(KG)
            </label>
            <input
              type="number"
              className="form-control"
              id="weight"
              aria-describedby="weight"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" id="p1" for="height">
              Height(Feet)
            </label>
            <input
              type="number"
              min="1"
              max="9"
              id="height"
              className="form-control"
              aria-describedby="height"
            />
            <div id="heightHelp" className="form-text">
              Minimum height 1 feet & maximum height 9 feet
            </div>
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="">
            <button type="reset" className="btn btn-light">
              Reload
            </button>
          </div>
          <div>
            <p className="bmiHeading" id="p1">
              Your BMI is:
            </p>
          </div>
        </form>
      }
    </div>
  );
}

export default App;
