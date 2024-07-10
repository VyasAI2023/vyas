import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const jobList = [
  {
    title: "Full Stack Universe Engineer",
    location: "Remote",
    department: "Engineering",
    link: "",
  },
  {
    title: "Account Executive",
    location: "Remote",
    department: "Sales",
    link: "",
  },
  {
    title: "Applied Machine Learning Research Engineer",
    location: "Remote",
    department: "Engineering",
    link: "",
  },
  {
    title: "Field Engineer",
    location: "Remote",
    department: "Customer Success",
    link: "",
  },
  {
    title: "Full Stack Engineer",
    location: "Remote",
    department: "Engineering",
    link: "",
  },
  {
    title: "Sales Development Representative",
    location: "Remote",
    department: "Sales",
    link: "",
  },
  {
    title: "Former Founders",
    location: "Remote",
    department: "General Inquiry",
    link: "",
  },
  {
    title: "Full Stack Machine Learning Engineer",
    location: "Remote",
    department: "Engineering",
    link: "",
  },
];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="text-center">
          <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">
            Opportunities
          </h2>
          <hr className="mt-2 w-40 mx-auto border-t-2 border-[#00df9a]" />
        </div>
      </div>
      <div className="section--default--padded bg-gradient-to-r from-aquavision-500 via-purple-500 to-purboflow-500 text-white px-12 py-8">
        <div id="Open-Positions" className="text-center">
          <hr className="mt-4 mb-4 w-[calc(100%-200px)] border-t-2 border-white mx-auto pb-4" />
          <div className="jobs-wrapper">
            <div role="list" className="w-dyn-items text-left">
              {jobList.map((job, index) => (
                <div key={index} role="listitem" className="w-dyn-item mb-8">
                  <a
                    href={job.link}
                    className="jobcard-container w-inline-block"
                  >
                    <h3 className="jobcard_title text-white text-2xl mb-2 font-bold pl-32">
                      {job.title}
                    </h3>
                    <div className="jobcard_description text-white text-lg pl-32">
                      {job.location} &nbsp;/&nbsp; {job.department}
                    </div>
                  </a>
                  <div className="text-center mt-4">
                    <a
                      href={job.link}
                      className="apply-now-button bg-[#00df9a] text-white py-2 px-4 rounded-md "
                    >
                      Apply Now
                    </a>
                  </div>
                  {index < jobList.length - 1 && (
                    <hr className="mt-4 mb-4 w-[calc(100%-200px)] border-t-2 border-white mx-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section--default--gray padding--t64b64 m-32">
        <h2
          id="benefits"
          className="text-center text-6xl mb-8 font-bold text-white"
        >
          Benefits
        </h2>
        <div className="w-layout-grid benefit__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="benefit-card text-center"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "32px 20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="teal"
              width={"64px"}
              height={"64px"}
            >
              <path d="M9 4C10.1046 4 11 4.89543 11 6V12.8271C10.1058 12.1373 8.96602 11.7305 7.6644 11.5136L7.3356 13.4864C8.71622 13.7165 9.59743 14.1528 10.1402 14.7408C10.67 15.3147 11 16.167 11 17.5C11 18.8807 9.88071 20 8.5 20C7.11929 20 6 18.8807 6 17.5V17.1493C6.43007 17.2926 6.87634 17.4099 7.3356 17.4864L7.6644 15.5136C6.92149 15.3898 6.1752 15.1144 5.42909 14.7599C4.58157 14.3573 4 13.499 4 12.5C4 11.6653 4.20761 11.0085 4.55874 10.5257C4.90441 10.0504 5.4419 9.6703 6.24254 9.47014L7 9.28078V6C7 4.89543 7.89543 4 9 4ZM12 3.35418C11.2671 2.52376 10.1947 2 9 2C6.79086 2 5 3.79086 5 6V7.77422C4.14895 8.11644 3.45143 8.64785 2.94126 9.34933C2.29239 10.2415 2 11.3347 2 12.5C2 14.0652 2.79565 15.4367 4 16.2422V17.5C4 19.9853 6.01472 22 8.5 22C9.91363 22 11.175 21.3482 12 20.3287C12.825 21.3482 14.0864 22 15.5 22C17.9853 22 20 19.9853 20 17.5V16.2422C21.2044 15.4367 22 14.0652 22 12.5C22 11.3347 21.7076 10.2415 21.0587 9.34933C20.5486 8.64785 19.8511 8.11644 19 7.77422V6C19 3.79086 17.2091 2 15 2C13.8053 2 12.7329 2.52376 12 3.35418ZM18 17.1493V17.5C18 18.8807 16.8807 20 15.5 20C14.1193 20 13 18.8807 13 17.5C13 16.167 13.33 15.3147 13.8598 14.7408C14.4026 14.1528 15.2838 13.7165 16.6644 13.4864L16.3356 11.5136C15.034 11.7305 13.8942 12.1373 13 12.8271V6C13 4.89543 13.8954 4 15 4C16.1046 4 17 4.89543 17 6V9.28078L17.7575 9.47014C18.5581 9.6703 19.0956 10.0504 19.4413 10.5257C19.7924 11.0085 20 11.6653 20 12.5C20 13.499 19.4184 14.3573 18.5709 14.7599C17.8248 15.1144 17.0785 15.3898 16.3356 15.5136L16.6644 17.4864C17.1237 17.4099 17.5699 17.2926 18 17.1493Z"></path>
            </svg>
            <h6 className="benefit_bullet_title text-xl font-semibold">
              Work from Anywhere
            </h6>
            <p className="benefit_bullet_description">
              We are a remote-first company. We encourage our team to work from
              wherever they are most comfortable and productive.
            </p>
          </div>
          <div
            className="benefit-card text-center"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "32px 20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="teal"
              width={"64px"}
              height={"64px"}
            >
              <path d="M12 1.35L4 5.69V12.34C4 17.64 7.61 22.74 12 23.97C16.39 22.74 20 17.64 20 12.34V5.69L12 1.35ZM12 5.65L16.73 8.12L12 10.6L7.27 8.12L12 5.65ZM6 7.09L11 9.8V19.93C8.39 18.67 6.71 15.99 6 12.34V7.09ZM13 19.93V9.8L18 7.09V12.34C17.29 15.99 15.61 18.67 13 19.93Z" />
            </svg>
            <h6 className="benefit_bullet_title text-xl font-semibold">
              Health and Wellness
            </h6>
            <p className="benefit_bullet_description">
              Comprehensive health, dental, and vision coverage. Flexible
              vacation and mental health days.
            </p>
          </div>
          <div
            className="benefit-card text-center"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "32px 20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="teal"
              width={"64px"}
              height={"64px"}
            >
              <path d="M11 15H13V17H11zM11 7H13V13H11zM12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1zM12 21C6.486 21 2 16.514 2 12C2 7.486 6.486 3 12 3C17.514 3 22 7.486 22 12C22 16.514 17.514 21 12 21z"></path>
            </svg>
            <h6 className="benefit_bullet_title text-xl font-semibold">
              Continuous Learning
            </h6>
            <p className="benefit_bullet_description">
              We support ongoing learning and development opportunities.
              Regular training, workshops, and conferences.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
