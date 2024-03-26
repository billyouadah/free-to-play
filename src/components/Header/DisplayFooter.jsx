import React from "react";

function DisplayFooter() {
  return (
    <footer className="audiowide-regular"
      style={{
        left: 0,
        bottom: 0,
        width: "100%",
        marginTop: "16px",
        backgroundColor: "#9D4EDD",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems:"center",
      }}>
        <div style={{ display:"flex", gap:"20px" }}>
          <p>HARENGERE</p>
          <p>On s'en FISH</p>
        </div>
          <p>© 2024</p>
    </footer>
  );
}

export default DisplayFooter;
