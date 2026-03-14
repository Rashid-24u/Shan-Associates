import React from "react";

function Footer() {

  return (

    <footer style={{
      background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
      color: "white",
      padding: "25px 20px",
      marginTop: "60px"
    }}>

      <div style={{
        maxWidth: "1100px",
        margin: "auto",
        textAlign: "center"
      }}>

        <h3 style={{marginBottom:"10px"}}>
          SHAN ASSOCIATES
        </h3>

        <p style={{
          fontSize:"14px",
          color:"#d0d7de"
        }}>
          📍 Mangalam, Purathur Road, Pin: 676561 Tirur, Kerala
        </p>

        <p style={{
          fontSize:"14px",
          color:"#d0d7de"
        }}>
          📞 +91 8089583618
        </p>

        <p style={{
          marginTop:"15px",
          fontSize:"12px",
          color:"#9fb3c8"
        }}>
          © {new Date().getFullYear()} SHAN ASSOCIATES. All rights reserved.
        </p>

      </div>

    </footer>

  );
}

export default Footer;