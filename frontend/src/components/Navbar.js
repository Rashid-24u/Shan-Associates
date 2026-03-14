import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  const navStyle = {
    position: "sticky",
    top: "0",
    zIndex: "1000",
    background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    padding: scrolled ? "10px 20px" : "18px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.3s",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    position: "relative",
    paddingBottom: "3px"
  };

  const menuStyle = {
    display: "flex",
    alignItems: "center",
    gap: "25px"
  };

  const mobileMenuStyle = {
    position: "absolute",
    top: "70px",
    right: "0",
    background: "#203a43",
    width: "220px",
    padding: "20px",
    borderRadius: "0 0 0 10px",
    display: menuOpen ? "block" : "none"
  };

  return (

    <nav style={navStyle}>

      {/* LOGO */}

      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none"
        }}
      >

        <img
          src="/images/shanlogo1.jpeg"
          alt="Shan Associates"
          style={{
            height: scrolled ? "38px" : "48px",
            transition: "0.3s"
          }}
        />

        <h2 style={{
          color: "white",
          fontSize: scrolled ? "18px" : "22px",
          margin: "0",
          letterSpacing: "1px"
        }}>
          SHAN ASSOCIATES
        </h2>

      </Link>


      {/* DESKTOP MENU */}

      {!isMobile && (

        <div style={menuStyle}>

          <Link to="/" style={linkStyle}>
            Home
          </Link>

          <Link to="/products" style={linkStyle}>
            Products
          </Link>

          <Link to="/contact" style={linkStyle}>
           📞Contact
          </Link>

        </div>

      )}


      {/* MOBILE BUTTON */}

      {isMobile && (

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "26px",
            color: "white",
            cursor: "pointer"
          }}
        >
          ☰
        </div>

      )}


      {/* MOBILE MENU */}

      {isMobile && (

        <div style={mobileMenuStyle}>

          <p>
            <Link to="/" style={{color:"white", textDecoration:"none"}}>
              Home
            </Link>
          </p>

          <p>
            <Link to="/products" style={{color:"white", textDecoration:"none"}}>
              Products
            </Link>
          </p>

          <p>
            <Link to="/contact" style={{color:"white", textDecoration:"none"}}>
              Contact
            </Link>
          </p>

        </div>

      )}

    </nav>

  );
}

export default Navbar;