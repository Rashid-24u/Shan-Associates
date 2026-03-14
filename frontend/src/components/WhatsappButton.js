import React from "react";

function WhatsAppButton() {

  const phoneNumber = "919847XXXXXX"; // replace with your number

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hello SHAN ASSOCIATES, I need information about building materials`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        textDecoration: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
      }}
    >
      💬
    </a>
  );
}

export default WhatsAppButton;