
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "75vh",
        padding: "35px 24px 60px",
        background:
          "radial-gradient(circle at 5% 15%, rgba(139,92,246,0.10), transparent 35%), radial-gradient(circle at 95% 85%, rgba(96,165,250,0.12), transparent 35%), #faf9ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        boxSizing: "border-box"
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            margin: "0 auto 22px",
            maxWidth: "1150px",
            fontSize: "clamp(30px, 5.5vw, 64px)",
            lineHeight: 1.15,
            fontWeight: 800,
            letterSpacing: "-1.5px",
            background:
              "linear-gradient(90deg, #5b4bf0 0%, #a12be2 48%, #ff4d35 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Welfare Schemes Accessibility and
          <br />
          Beneficiary Coverage Analytics
        </h1>

       <p
  style={{
    maxWidth: "1050px",
    margin: "0 auto",
    color: "#44445a",
    fontSize: "clamp(16px, 2vw, 22px)",
    lineHeight: 1.8
  }}
>
  Welcome to Maha Welfare Connect. This platform provides
  information about Maharashtra government welfare schemes,
  eligibility requirements, benefits and beneficiary coverage.
  <br />
  <strong style={{ color: "#c2410c" }}>
    Disclaimer: This is an educational project and is not an
    official Maharashtra Government website.
  </strong>
</p>

        {/* Button positioned below the description */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "36px",
            width: "100%"
          }}
        >
          <Link
            to="/schemes"
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "230px",
              minHeight: "58px",
              padding: "15px 30px",
              boxSizing: "border-box",
              borderRadius: "40px",
              background: "linear-gradient(110deg, #5145e8, #8438ed)",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: 700,
              boxShadow: "0 12px 25px rgba(99,65,230,0.22)"
            }}
          >
            Explore Schemes
          </Link>
        </div>
      </section>
    </div>
  );
}
