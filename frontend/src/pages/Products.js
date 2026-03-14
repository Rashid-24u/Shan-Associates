import React, { useEffect, useState } from "react";

function Products() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {

    fetch("https://shan-associates.onrender.com/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch("https://shan-associates.onrender.com/api/categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data));

  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (

    <div style={{ padding: "25px", maxWidth: "1200px", margin: "auto" }}>

      {/* CATEGORY BAR */}

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "10px",
          marginBottom: "30px",
          paddingBottom: "5px"
        }}
      >

        <button
          onClick={() => setSelectedCategory(null)}
          style={{
            padding: "8px 18px",
            background: selectedCategory === null ? "#07541e" : "#eee",
            color: selectedCategory === null ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            whiteSpace: "nowrap"
          }}
        >
          All Materials
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: "8px 18px",
              background: selectedCategory === cat.id ? "#07541e" : "#eee",
              color: selectedCategory === cat.id ? "white" : "black",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
          >
            {cat.name}
          </button>
        ))}

      </div>


      {/* PRODUCTS GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: "25px"
        }}
      >

        {filteredProducts.length === 0 ? (

          <div style={{ textAlign: "center", padding: "60px" }}>
            <h3>No products available in this material</h3>
            <p>Please choose another material.</p>
          </div>

        ) : (

          filteredProducts.map((product) => (

            <div
              key={product.id}
              style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                padding: "15px",
                background: "white",
                textAlign: "center",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s",
                minHeight: "420px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative"
              }}

              onMouseEnter={(e)=>{
                e.currentTarget.style.transform="translateY(-6px)";
                e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.15)";
              }}

              onMouseLeave={(e)=>{
                e.currentTarget.style.transform="translateY(0)";
                e.currentTarget.style.boxShadow="0 6px 20px rgba(0,0,0,0.08)";
              }}

            >

              {/* BEST PRICE BADGE */}

              <div style={{
                position:"absolute",
                top:"10px",
                left:"10px",
                background:"#2a7c7f",
                color:"white",
                fontSize:"12px",
                padding:"4px 10px",
                borderRadius:"20px"
              }}>
                Best Price
              </div>


              {/* PRODUCT IMAGE */}

              <img
                src={`https://shan-associates.onrender.com${product.image}`}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />

              {/* PRODUCT DETAILS */}

              <div>

                <h3 style={{ marginTop: "12px" }}>
                  {product.name}
                </h3>

                <p style={{ fontSize: "14px", color: "#666" }}>
                  {product.description}
                </p>

                {product.stock ? (
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    ✔ Available
                  </p>
                ) : (
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    ❌ Currently Unavailable
                  </p>
                )}

                

              </div>

              {/* WHATSAPP BUTTON */}

              <a
                href={`https://wa.me/918089583618?text=Hello SHAN ASSOCIATES, I would like to know the price and details about ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >

                <button
                  style={{
                    marginTop: "10px",
                    padding: "10px",
                    background: "#0a7f2e",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    width: "100%",
                    fontWeight: "500"
                  }}
                >
                  WhatsApp Enquiry
                </button>

              </a>

            </div>

          ))

        )}

      </div>

    </div>

  );
}

export default Products;