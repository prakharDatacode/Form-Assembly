import React from "react";
import Button from "/src/components/Button";
import Success from "/src/assets/images/Success.png";
import Southwest from "/src/assets/images/southwest-logo.png";
import Expert from "/src/assets/images/expert.png";
import Collect from "/src/assets/images/collect.png";
import Connect from "/src/assets/images/connect.png";
import Protect from "/src/assets/images/protect.png";
import Table from "/src/assets/images/table.png";
import Orgs from "/src/assets/images/form-org.png";
import { CiCircleCheck } from "react-icons/ci";

const industries = [
  {
    title: "Financial Services",
    description:
      "Process and approve claims and applications, verify and authenticate documents, and more with audit trails and secure, compliant data handling.",
  },
  {
    title: "Higher Education",
    description:
      "Create web forms and automate approval processes that improve admissions, alumni relations, and student engagement.",
  },
  {
    title: "Healthcare Organizations",
    description:
      "Collect and process HIPAA-compliant data for patient intake, referrals, clinical trials, medication approvals, and more.",
  },
  {
    title: "Nonprofit Organizations",
    description:
      "Leverage branded forms to drive membership, manage volunteers, and process donations securely.",
  },
  {
    title: "Government Agencies",
    description:
      "State and Federal agencies, collect and manage data compliantly with an authorized Cloud Service Offering (CSO).",
  },
];

const HomePage = () => {
  return (
    <div className="row mx-0 parent">
      <div className="col-12 d-flex justify-content-center">
        <div className="row mx-0 d-flex justify-content-center">
          <div className="col-md-10 px-0">
            <div className="d-flex align-items-center text-center flex-column hero-section">
              <h1 className="px-5 heading">
                Unlimited Web Forms; Secure Data Collection
              </h1>
              <p>Collect, connect & protect your data with FormAssembly</p>
              <Button className="custoume-btn">Book a Demo</Button>
              <img src={Success} width={1300} alt="Success" />
              <p>
                Trusted by Thousands of businesses, universities, and nonprofits
                worldwide
              </p>
            </div>
            <div className="d-flex justify-content-between flex-wrap mb-5 brands">
              <div className=" px-0 brand-card ">
                <img src={Southwest} height={60} alt="Southwest" />
              </div>
              <div className=" px-0 brand-card">
                <img src={Southwest} height={60} alt="Southwest" />
              </div>
              <div className=" px-0 brand-card">
                <img src={Southwest} height={60} alt="Southwest" />
              </div>
              <div className=" px-0 brand-card">
                <img src={Southwest} height={60} alt="Southwest" />
              </div>
              <div className=" px-0 brand-card">
                <img src={Southwest} height={60} alt="Southwest" />
              </div>
            </div>
            <div className="d-flex salesforce">
              <div className="salesforce-content">
                <h1 className="pe-5 me-5 my-3 salesforce-heading heading">
                  Get the form builder preferred by Salesforce users
                </h1>
                <p className="pe-5 me-5 salesforce-inner-text">
                  Prefill forms and create dynamic picklists with Salesforce
                  data, reduce manual data entry while improving data quality,
                  and quickly create new forms with any Salesforce object using
                  no-code tools that anyone can master.
                </p>
                <Button className="custoume-btn">Talk to an Expert</Button>
              </div>
              <div className="expert-img">
                <img src={Expert} height={300} alt="Expert" />
              </div>
            </div>
            <div className="px-4 py-5 my-5 stategy">
              <h1 className="text-center my-5 strategy-title heading">
                Your data collection strategy starts here
              </h1>
              <div className="border d-flex stategy">
                <div className="border p-3 stategy-card">
                  <div className="d-flex justify-content-center stategy-img">
                    <img src={Collect} height={200} alt="Collect" />
                  </div>
                  <h2>Collect</h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Numquam dicta eaque reprehenderit nostrum alias laudantium
                    dolorem esse placeat asperiores ea quos accusamus earum,
                    nemo officiis possimus provident ratione quo sit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente odio, quos incidunt ea cumque hic illo illum
                    maiores
                  </p>
                  <Button>Collect</Button>
                </div>
                <div className="border p-3 stategy-card">
                  <div className="d-flex justify-content-center stategy-img">
                    <img src={Connect} height={200} alt="Connect" />
                  </div>
                  <h2>Connect</h2>
                  <p className="mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde nemo pariatur, atque saepe modi at nihil quam, labore
                    quod quibusdam doloremque optio amet temporibus doloribus
                    perferendis explicabo facere magnam in?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente odio, quos incidunt ea cumque hic illo illum
                    maiores
                  </p>
                  <Button>Connect</Button>
                </div>
                <div className="border p-3 stategy-card">
                  <div className="d-flex justify-content-center stategy-img">
                    <img src={Protect} height={200} alt="Protect" />
                  </div>
                  <h2>Protect</h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro praesentium ipsum ex aliquid quam dolores? Ipsum sunt
                    perspiciatis id earum voluptatum? Veniam voluptatum ratione
                    quidem nesciunt ipsam quaerat commodi perspiciatis?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente odio, quos incidunt ea cumque hic illo illum
                    maiores
                  </p>
                  <Button>Protect</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="industry-section">
        <div className="py-3 inner-industry-section">
          <h1 className="text-center my-3 heading">
            Build forms that build your business
          </h1>
          <div className="row g-4 mt-4 cards">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
              >
                <div className="p-4 card ">
                  <h3 className="fw-bold">{industry.title}</h3>
                  <p>{industry.description}</p>
                  <Button className="custoume-btn">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-5 px-5 form-benefits">
        <div className="px-5 d-flex inner-form-benefits">
          <div className="form-benefits-content">
            <h1 className="pe-5 me-5 px-5 form-benefits-title heading">
              Going digital should drive your business forward, not hold it back
            </h1>
            <p className="px-5 my-3 form-benefits-subtext">
              Break free from web form limits and collect the data you need to
              run your business, serve your customers, and achieve your goals.
            </p>
            <div className="px-5 my-3 form-benefits-check">
              <div className="d-flex mb-2">
                <CiCircleCheck size={30} />
                <span className="fw-bold mx-2 form-check-text">No form limits</span>
              </div>
              <div className="d-flex mb-2">
                <CiCircleCheck size={30} />
                <span className="fw-bold mx-2 form-check-text">No overage charges</span>
              </div>
              <div className="d-flex mb-2">
                <CiCircleCheck size={30} />
                <span className="fw-bold mx-2 form-check-text">No Kidding</span>
              </div>
            </div>
            <div className="px-5 form-btn">
              <Button className="custoume-btn">Talk to an Expert</Button>
            </div>
          </div>
          <div className="pe-5 form-table-img">
            <img src={Table} height={500} alt="Table" />
          </div>
        </div>
      </div>
      <div className="px-5 py-5 form-organization">
        <div className="px-5 d-flex align-items-center inner-form-organization">
          <div className="form-org-content">
            <h2 className="pe-5 me-5 px-5 mb-4 text-white form-org-heading">
              Ready to see how FormAssembly can make a difference at your
              organization?
            </h2>
            <div className="px-5 form-org-btn">
              <Button className="custoume-btn">Talk to an Expert</Button>
            </div>
          </div>
          <div className="pe-5 form-org-img">
            <img src={Orgs} height={350} alt="Orgs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
