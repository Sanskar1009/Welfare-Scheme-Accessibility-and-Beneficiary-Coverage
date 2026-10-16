import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Home from "./pages/Home";
import Schemes from "./pages/Schemes";
import Eligibility from "./pages/Eligibility";
import Analytics from "./pages/Analytics";
import About from "./pages/About";

import "./App.css";


/* =====================================================
   NAVBAR
===================================================== */

function Navbar({ onEligibilityClick }) {

  const location = useLocation();

  return (
    <nav className="navbar">

      {/* WEBSITE LOGO / NAME */}

      <div className="logo">
        Maha Welfare Connect
      </div>


      {/* NAVIGATION LINKS */}

      <div className="nav-links">

        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "active-link"
              : ""
          }
        >
          Home
        </Link>


        <Link
          to="/schemes"
          className={
            location.pathname === "/schemes"
              ? "active-link"
              : ""
          }
        >
          Schemes
        </Link>


        {/* ELIGIBILITY BUTTON */}

        <button
          type="button"
          className="nav-eligibility-btn"
          onClick={onEligibilityClick}
        >
          Eligibility
        </button>


        <Link
          to="/analytics"
          className={
            location.pathname === "/analytics"
              ? "active-link"
              : ""
          }
        >
          Analytics
        </Link>


        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "active-link"
              : ""
          }
        >
          About
        </Link>

      </div>

    </nav>
  );
}


/* =====================================================
   ELIGIBILITY POPUP
===================================================== */

function EligibilityPopup({
  onClose
}) {

  const [age, setAge] = useState("");

  const [result, setResult] = useState("");


  /* =====================================================
     CHECK ELIGIBILITY
  ===================================================== */

  const checkEligibility = () => {

    if (age === "") {

      setResult("Please enter your age.");

      return;
    }


    const userAge = Number(age);


    if (userAge >= 21 && userAge <= 70) {

      setResult("ELIGIBLE");

    } else {

      setResult("NOT ELIGIBLE");

    }

  };


  /* =====================================================
     RESET
  ===================================================== */

  const resetForm = () => {

    setAge("");

    setResult("");

  };


  return (

    <div
      className="popup-overlay"
      onClick={(event) => {

        if (
          event.target === event.currentTarget
        ) {

          onClose();

        }

      }}
    >

      <div className="eligibility-popup">


        {/* CLOSE BUTTON */}

        <button
          type="button"
          className="popup-close"
          onClick={onClose}
        >
          ×
        </button>


        {/* SMALL TITLE */}

        <p className="small-title">
          MAHARASHTRA WELFARE SCHEMES
        </p>


        {/* TITLE */}

        <h2>
          Eligibility Checker
        </h2>


        <p className="popup-description">

          Enter your age to check your
          eligibility.

        </p>


        {/* AGE LABEL */}

        <label htmlFor="age">
          Age
        </label>


        {/* AGE INPUT */}

        <input
          id="age"
          type="number"
          min="1"
          max="120"
          placeholder="Enter your age"
          value={age}
          onChange={(event) => {

            setAge(event.target.value);

            setResult("");

          }}
        />


        {/* CHECK BUTTON */}

        <button
          type="button"
          className="check-button"
          onClick={checkEligibility}
        >
          Check Eligibility
        </button>


        {/* =================================================
            RESULT
        ================================================= */}

        {result !== "" && (

          <div className="result-popup">


            {/* ELIGIBLE */}

            {result === "ELIGIBLE" && (

              <>

                <div className="result-icon">
                  ✓
                </div>


                <h3>
                  You are Eligible!
                </h3>


                <p>
                  Your age is between
                  21 and 70 years.
                </p>


                <button
                  type="button"
                  className="result-button"
                  onClick={onClose}
                >
                  Continue
                </button>

              </>

            )}


            {/* NOT ELIGIBLE */}

            {result === "NOT ELIGIBLE" && (

              <>

                <div className="result-icon">
                  ✕
                </div>


                <h3>
                  You are Not Eligible
                </h3>


                <p>
                  The eligible age range is
                  21 to 70 years.
                </p>


                <button
                  type="button"
                  className="result-button"
                  onClick={resetForm}
                >
                  Try Again
                </button>

              </>

            )}


            {/* EMPTY AGE */}

            {result === "Please enter your age." && (

              <>

                <div className="result-icon">
                  !
                </div>


                <h3>
                  Age Required
                </h3>


                <p>
                  Please enter your age
                  to continue.
                </p>


                <button
                  type="button"
                  className="result-button"
                  onClick={() =>
                    setResult("")
                  }
                >
                  Try Again
                </button>

              </>

            )}

          </div>

        )}

      </div>

    </div>

  );
}


/* =====================================================
   MAIN APP
===================================================== */

function App() {

  /* =====================================================
     ELIGIBILITY POPUP STATE
  ===================================================== */

  const [
    showEligibility,
    setShowEligibility
  ] = useState(false);


  /* =====================================================
     OPEN ELIGIBILITY POPUP
  ===================================================== */

  const openEligibility = () => {

    setShowEligibility(true);

  };


  /* =====================================================
     CLOSE ELIGIBILITY POPUP
  ===================================================== */

  const closeEligibility = () => {

    setShowEligibility(false);

  };


  return (

    <BrowserRouter>

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        onEligibilityClick={openEligibility}
      />


      {/* =================================================
          PAGE ROUTES
      ================================================= */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* SCHEMES */}

        <Route
          path="/schemes"
          element={<Schemes />}
        />


        {/* ELIGIBILITY PAGE */}

        <Route
          path="/eligibility"
          element={<Eligibility />}
        />


        {/* ANALYTICS */}

        <Route
          path="/analytics"
          element={<Analytics />}
        />


        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>


      {/* =================================================
          ELIGIBILITY POPUP
      ================================================= */}

      {showEligibility && (

        <EligibilityPopup
          onClose={closeEligibility}
        />

      )}

    </BrowserRouter>

  );
}


export default App;