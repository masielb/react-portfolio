import React from "react";

function Nav() {
  return (   
    
    <div className="container">
        <div className="contact-container">
          <h2 id="contact">get in touch.</h2>
          <button 
            type="button" 
            className="btn-lg"
            onClick={(event) => (window.location.href = "contact")}
            >
            CONTACT 
          </button>
        </div>
    </div>
  );
}
  
export default Nav;