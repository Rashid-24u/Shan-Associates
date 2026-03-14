import React from "react";

function Contact() {

  const phoneNumber = "918089583618";
  const mapLocation = "https://maps.app.goo.gl/NMuvDgwVnDF8z62q6";

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.25s ease"
  };

  return (

    <div style={{
      padding: "40px 20px",
      maxWidth: "1100px",
      margin: "auto"
    }}>

      {/* Title */}

      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Contact SHAN ASSOCIATES
      </h1>

      <p style={{
        textAlign: "center",
        color: "#555",
        marginBottom: "40px"
      }}>
        Building Materials Supplier – Mangalam
      </p>


      {/* Main Grid */}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "30px"
      }}>


        {/* Contact Info Card */}

        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
        }}>

          <h3>Address</h3>

          <p style={{
            color: "#555",
            lineHeight: "1.6",
            fontSize: "15px"
          }}>
            🏠 <b>SHAN ASSOCIATES</b> <br/>
            Mangalam, Purathur Road, Pin: 676561 <br/>
            Tirur, Kerala <br/>
            India
          </p>


          {/* Clickable Phone */}

          <p style={{ color: "#555", marginTop: "10px" }}>
            📞
            <a
              href={`tel:+${phoneNumber}`}
              style={{
                color:"#0a7f2e",
                textDecoration:"none",
                marginLeft:"6px",
                fontWeight:"500"
              }}
            >
              +91 80895 83618
            </a>
          </p>


          {/* Phone Button */}

          <h3 style={{ marginTop: "20px" }}>
            Phone
          </h3>

          <a href={`tel:+${phoneNumber}`}>

            <button
              style={{
                ...buttonStyle,
                background:"#0a7f2e",
                color:"white"
              }}
              onMouseEnter={(e)=>{
                e.target.style.transform="translateY(-2px)";
                e.target.style.boxShadow="0 6px 15px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e)=>{
                e.target.style.transform="translateY(0)";
                e.target.style.boxShadow="none";
              }}
            >
              📞 Call Now
            </button>

          </a>


          {/* WhatsApp */}

          <a
            href={`https://wa.me/${phoneNumber}?text=Hello SHAN ASSOCIATES, I would like to know more about your building materials and prices.`}
            target="_blank"
            rel="noopener noreferrer"
          >

            <button
              style={{
                ...buttonStyle,
                background:"green",
                color:"white"
              }}
              onMouseEnter={(e)=>{
                e.target.style.transform="translateY(-2px)";
                e.target.style.boxShadow="0 6px 15px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e)=>{
                e.target.style.transform="translateY(0)";
                e.target.style.boxShadow="none";
              }}
            >
              💬 WhatsApp Enquiry
            </button>

          </a>


          {/* Google Maps */}

          <a
            href={mapLocation}
            target="_blank"
            rel="noopener noreferrer"
          >

            <button
              style={{
                ...buttonStyle,
                background:"#444",
                color:"white"
              }}
              onMouseEnter={(e)=>{
                e.target.style.transform="translateY(-2px)";
                e.target.style.boxShadow="0 6px 15px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e)=>{
                e.target.style.transform="translateY(0)";
                e.target.style.boxShadow="none";
              }}
            >
              📍 Open in Google Maps
            </button>

          </a>

        </div>


        {/* Map Card */}

        <div style={{
          background: "white",
          padding: "10px",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
        }}>

          <iframe
            title="shop-location"
            src="https://www.google.com/maps?q=SHAN%20ASSOCIATES%20Mangalam&output=embed"
            width="100%"
            height="380"
            style={{
              border: "0",
              borderRadius: "10px"
            }}
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </div>

  );
}

export default Contact;