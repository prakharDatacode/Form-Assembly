import React from "react";
import "/src/assets/styles/FormAssembly.scss";
import succes from "/src/assets/images/Success.png";
import southwest from "/src/assets/images/southwest-logo.png";
const HomePage = () => {
  return (
    <div className="row mx-0 parent">
      <div className="col-12 d-flex justify-content-center">
        <div className="col-md-10 ">
          <div className="d-flex align-items-center text-center flex-column hero-section">
            <span className="">
              <h1>Unlimited Web Forms; Secure Data Collection</h1>
            </span>
            <span>
              <p>Collect, connect & protect your data with FormAssembly</p>
            </span>
            <button className="demo-btn">Book a Demo</button>
            <img src={succes} width={1300} alt="" />
            <span>
              <p>
                Trusted by Thousands of businesses, universities, and nonprofits
                worldwide
              </p>
            </span>
          </div>

          <div className="d-flex justify-content-between flex-wrap  ">
            <div className=" px-0 brand-card ">
              <img src={southwest} height={60} alt="" />
            </div>
            <div className=" px-0 brand-card">
              <img src={southwest} height={60} alt="" />
            </div>
            <div className=" px-0 brand-card">
              <img src={southwest} height={60} alt="" />
            </div>
            <div className=" px-0 brand-card">
              <img src={southwest} height={60} alt="" />
            </div>
            <div className=" px-0 brand-card">
              <img src={southwest} height={60} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
