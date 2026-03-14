import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const materials = [
    { name: "Cements", image: "/images/cement11.avif" },
    { name: "TMT Steel", image: "/images/tmt1.jpg" },
    { name: "Roofing Sheets", image: "/images/sheet.webp" },
    { name: "Steel Rings", image: "/images/ring.webp" },
    { name: "Pipes", image: "/images/pipe.webp" },
    { name: "Tile Adhesives", image: "/images/adhesives.webp" },
    { name: "Waterproofing", image: "/images/watrproof.webp" },
    { name: "Construction Hardware", image: "/images/hardwares.webp" }
  ];

  return (

    <div>

      {/* HERO SECTION */}

      <div style={{
        background:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/construction-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "140px 20px",
        textAlign: "center"
      }}>

        <h1 style={{
          fontSize: "52px",
          marginBottom: "10px",
          letterSpacing: "1px"
        }}>
          SHAN ASSOCIATES
        </h1>

        <h3 style={{ marginBottom: "20px", fontWeight: "500" }}>
          Mangalam Building Materials Supplier
        </h3>

        <p style={{
          maxWidth: "650px",
          margin: "auto",
          lineHeight: "1.6"
        }}>
          Trusted supplier of quality construction materials including
          cement, TMT steel, roofing sheets, pipes, tile adhesives,
          waterproofing materials and construction hardware.
        </p>

        {/* CTA BUTTONS */}

        <div style={{ marginTop: "30px" }}>

          <button
            onClick={() => navigate("/products")}
            style={{
              padding: "12px 25px",
              marginRight: "12px",
              background: "#0a7f2e",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "0.3s"
            }}
            onMouseEnter={(e)=>{
              e.target.style.background="#086424";
            }}
            onMouseLeave={(e)=>{
              e.target.style.background="#0a7f2e";
            }}
          >
            View Materials
          </button>

          <button
            onClick={() => navigate("/contact")}
            style={{
              padding: "12px 25px",
              background: "transparent",
              border: "2px solid white",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseEnter={(e)=>{
              e.target.style.background="white";
              e.target.style.color="black";
            }}
            onMouseLeave={(e)=>{
              e.target.style.background="transparent";
              e.target.style.color="white";
            }}
          >
            Contact Us
          </button>

        </div>

      </div>


      {/* ABOUT COMPANY */}

      <div style={{
        background: "#f7f7f7",
        padding: "70px 20px"
      }}>

        <div style={{
          maxWidth: "900px",
          margin: "auto",
          textAlign: "center"
        }}>

          <h2>About Us</h2>

          <p style={{ color: "#555", marginTop: "15px", lineHeight: "1.7" }}>
            J B Group of Companies, established in 2007, is a trusted supplier
            of high-quality construction and building materials based in
            Coimbatore, Tamil Nadu. With years of experience in the construction
            industry, we have built a strong reputation for providing reliable
            products, competitive pricing, and excellent customer service across
            South India, including Kerala and Karnataka.
          </p>

          <p style={{ color: "#555", marginTop: "15px", lineHeight: "1.7" }}>
            We specialize in supplying premium TMT bars, cement, and other
            essential construction materials that meet modern building standards.
            Our company proudly partners with leading and trusted brands in
            TMT bars, cements, pipes, sheets, and other building materials,
            ensuring our customers receive only the best quality products
            for their construction projects.
          </p>

        </div>

      </div>


      {/* VISION & MISSION */}

      <div style={{ padding: "70px 20px" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "auto"
        }}>

          {/* Vision */}

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
          }}>

            <h3 style={{ marginBottom: "10px" }}>👁 Vision</h3>

            <p style={{ color: "#555", lineHeight: "1.7" }}>
              Our company proudly partners with leading and trusted brands in
              TMT bars, cement, pipes, roofing sheets, and other building materials,
              ensuring our customers receive only the highest quality materials
              for their construction projects.
            </p>

            <p style={{ color: "#555", lineHeight: "1.7", marginTop: "10px" }}>
              We believe that strong structures begin with strong materials.
              Our focus is not only on quality but also on innovation,
              sustainability, and environmental responsibility. We continuously
              strive to introduce advanced building solutions that support
              durable, safe, and eco-friendly construction.
            </p>

          </div>


          {/* Mission */}

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
          }}>

            <h3 style={{ marginBottom: "10px" }}>🎯 Mission</h3>

            <p style={{ color: "#555", lineHeight: "1.7" }}>
              Our mission is to deliver high-quality building materials tailored
              to customer needs while maintaining long-term relationships with
              builders, contractors, and construction professionals.
            </p>

            <p style={{ color: "#555", lineHeight: "1.7", marginTop: "10px" }}>
              With a commitment to excellence and sustainability, we aim to
              contribute to building a stronger and better future for
              generations to come.
            </p>

          </div>

        </div>

      </div>


      {/* MATERIALS SECTION */}

      <div style={{ padding: "60px 20px" }}>

        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Our Materials
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          maxWidth: "1000px",
          margin: "auto"
        }}>

          {materials.map((item, index) => (

            <div
              key={index}
              onClick={() => navigate("/products")}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                transition: "all 0.3s",
                cursor: "pointer",
                background: "white"
              }}

              onMouseEnter={(e)=>{
                e.currentTarget.style.transform="translateY(-8px)";
                e.currentTarget.style.boxShadow="0 15px 30px rgba(0,0,0,0.2)";
              }}

              onMouseLeave={(e)=>{
                e.currentTarget.style.transform="translateY(0)";
                e.currentTarget.style.boxShadow="0 6px 18px rgba(0,0,0,0.12)";
              }}
            >

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "170px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "15px", textAlign: "center" }}>
                <h3>{item.name}</h3>
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default Home;