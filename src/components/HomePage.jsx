import React from "react";
import "/src/assets/styles/FormAssembly.scss";
import Button from "/src/components/Button";
import succes from "/src/assets/images/Success.png";
import southwest from "/src/assets/images/southwest-logo.png";
import expert from "/src/assets/images/expert.png";
import collect from "/src/assets/images/collect.png";
import connect from "/src/assets/images/connect.png";
import protect from "/src/assets/images/protect.png";
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

          <div className="d-flex justify-content-between flex-wrap brands ">
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
          <div className="salesforce d-flex">
            <div className="salesforce-content">
              <div className="salesforce-title ">
                <h1>Get the form builder preferred by Salesforce users</h1>
              </div>
              <span className="salesforce-subtext">
                <p>
                  Prefill forms and create dynamic picklists with Salesforce
                  data, reduce manual data entry while improving data quality,
                  and quickly create new forms with any Salesforce object using
                  no-code tools that anyone can master.
                </p>
              </span>
              <button>Talk to an Expert</button>
            </div>
            <div className="expert-img">
              <img src={expert} height={300} alt="" />
            </div>
          </div>
          <div className="stategy">
            <div className="strategy-title text-center">
              <h1>Your data collection strategy starts here</h1>
            </div>
            <div className="border d-flex stategy">
              <div className="border p-3 stategy-card">
                <div className="d-flex justify-content-center stategy-img">
                  <img src={collect} height={200} alt="" />
                </div>
                <h2>Collect</h2>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam dicta eaque reprehenderit nostrum alias laudantium
                  dolorem esse placeat asperiores ea quos accusamus earum, nemo
                  officiis possimus provident ratione quo sit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente odio, quos incidunt ea cumque hic illo illum maiores
                </p>
                <Button>Collect</Button>
              </div>
              <div className="border p-3 stategy-card">
                <div className="d-flex justify-content-center stategy-img">
                  <img src={connect} height={200} alt="" />
                </div>
                <h2>Connect</h2>
                <p className="mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                  nemo pariatur, atque saepe modi at nihil quam, labore quod
                  quibusdam doloremque optio amet temporibus doloribus
                  perferendis explicabo facere magnam in?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente odio, quos incidunt ea cumque hic illo illum maiores
                </p>
                <Button>Connect</Button>
              </div>
              <div className="border p-3 stategy-card">
                <div className="d-flex justify-content-center stategy-img">
                  <img src={protect} height={200} alt="" />
                </div>
                <h2>Protect</h2>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  praesentium ipsum ex aliquid quam dolores? Ipsum sunt
                  perspiciatis id earum voluptatum? Veniam voluptatum ratione
                  quidem nesciunt ipsam quaerat commodi perspiciatis?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente odio, quos incidunt ea cumque hic illo illum maiores
                </p>
                <Button>Protect</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
