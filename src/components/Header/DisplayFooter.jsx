import React from 'react';



function DisplayFooter() {
    return (
      <footer style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: '#9D4EDD',
       padding : "20px",
       display : 'flex',
       justifyContent : "center",
       
      }}>
        <div>
          <a href="#">Accueil</a>
          <a href="#">Catalogue</a>
          <a href="#">Contact</a>
          <a href="#">© 2024</a>
        </div>
      </footer>
    );
}

export default DisplayFooter;