import React from "react";

function DisplayFooter() {
  return (
    <footer
      style={{
        // position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#9D4EDD",
        // padding: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <a href="Accueil">Accueil</a>
        <a href="Catalogue">Catalogue</a>
        <a href="Contact">Contact</a>
        <p>© 2024</p>
      </div>
    </footer>
  );
}

export default DisplayFooter;
