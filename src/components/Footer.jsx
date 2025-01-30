import React from "react";
import FormAssembly from "/src/assets/images/form-assembly-white.png";
const Footer = () => {
  return (
    <footer className="px-5 footer-section">
      <div className="row mx-0 px-5 py-5 footer-content">
        <div className="col-12 col-lg-3 px-5 footer-column">
            <img src={FormAssembly} height={55} alt="" />
            <p className="text-white">FormAssembly Inc.</p>
            <p className="text-white">885 S College Mall Rd, #399</p>
            <p className="text-white">Bloomington, IN 47401</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
