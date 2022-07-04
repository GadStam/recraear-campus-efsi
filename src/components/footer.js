import React from "react";


const Footer = () => (
<div className="footer-copyright text-center" style={{ color: "white", 
                   textAlign: "center",
                   background: "#343a40",
                   paddingTop: "3rem",
                   paddingBottom: "3rem"    }}>
    
          &copy; {new Date().getFullYear()} Copyright: GadyEitan 
        
      </div>
)
export default Footer;