import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const jobList = [
  {
    title: "Full Stack Universe Engineer",
    location: "Remote",
    department: "Engineering",
    link: "https://docs.google.com/forms/d/e/your_form_id/viewform", // Replace with your Google Form URL
  },
  {
    title: "Account Executive",
    location: "Remote",
    department: "Sales",
    link: "https://docs.google.com/forms/d/e/your_form_id/viewform",
  },
  {
    title: "Applied Machine Learning Research Engineer",
    location: "Remote",
    department: "Engineering",
    link: "https://docs.google.com/forms/d/e/your_form_id/viewform",
  },
  {
    title: "Field Engineer",
    location: "Remote",
    department: "Customer Success",
    link: "https://docs.google.com/forms/d/e/your_form_id/viewform",
  },
  {
    title: "Full Stack Engineer",
    location: "Remote",
    department: "Engineering",
    link: "https://docs.google.com/forms/d/e/your_form_id/viewform",
  },
  {
    title: "Sales Development Representative",
    location: "Remote",
    department: "Sales",
    link: "https://docs.google.com/forms/d/e/your_form_id/viewform",
  },
  {
    title: "Former Founders",
    location: "Remote",
    department: "General Inquiry",
    link: "https://docs.google.com/forms/d/e/your_form_id/viewform",
  },
  {
    title: "Full Stack Machine Learning Engineer",
    location: "Remote",
    department: "Engineering",
    link: "https://docs.google.com/forms/d/e/your_form_id/viewform",
  },
];

const Jobs = () => {
  const jobCardStyle = {
    backgroundColor: "black", // Background color for each job card
    border: "2px solid white", // White border around each job card
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const applyNowButtonStyle = {
    backgroundColor: "#00df9a",
    color: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "background-color 0.3s",
    textDecoration: "none", // Ensure the button doesn't have underline
    cursor: "pointer", // Show pointer cursor on hover
  };

  const applyNowButtonHoverStyle = {
    backgroundColor: "gray-900",
  };

  const jobDetailsStyle = {
    textAlign: "left", // Aligning job details text to the left
  };

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="text-center">
          <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">
            Opportunities
          </h2>
        </div>
      </div>
      <div className="section--default--padded bg-gradient-to-r from-aquavision-500 via-purple-500 to-purboflow-500 text-white px-12 py-8">
        <div id="Open-Positions" className="text-center">
          {/* Adjusted HR with black background */}
          <hr className="mt-4 mb-4 w-[calc(100%-200px)] border-t-2 border-white mx-auto pb-4 bg-black" />
          <div className="jobs-wrapper">
            {jobList.map((job, index) => (
              <div key={index} className="job-card" style={jobCardStyle}>
                <div style={jobDetailsStyle}>
                  <h3 className="job-title text-2xl font-bold">{job.title}</h3>
                  <p className="job-details text-lg">
                    {job.location} &nbsp;/&nbsp; {job.department}
                  </p>
                </div>
                <div>
                  <a
                    href={job.link}
                    className="apply-now-button"
             
                    style={applyNowButtonStyle}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor =
                        applyNowButtonHoverStyle.backgroundColor;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor =
                        applyNowButtonStyle.backgroundColor;
                    }}
                    target="_blank" // Open link in new tab
                    rel="noopener noreferrer" // Security best practices
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black text-white px-12 py-8">
        <div id="benefits" className="text-center">
          {/* Adjusted HR with black background */}
          <hr className="mt-4 mb-4 w-[calc(100%-200px)] border-t-2 border-white mx-auto pb-4 bg-black" />
          <h2 className="text-6xl mb-8 font-bold text-[rgb(0,223,154)]">Benefits</h2>
          <div className="w-layout-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="benefit-card text-center"
              style={{
                backgroundColor: "#000000",
                borderRadius: "16px",
                padding: "32px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1a202c";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="teal"
                width={"64px"}
                height={"64px"}
              >
                <path d="M9 4C10.1046 4 11 4.89543 11 6V12.8271C10.1058 12.1373 8.96602 11.7305 7.6644 11.5136L7.3356 13.4864C8.71622 13.7165 9.59743 14.1528 10.1402 14.7408C10.67 15.3147 11 16.167 11 17.5C11 18.8807 9.88071 20 8.5 20C7.11929 20 6 18.8807 6 17.5V17.1493C6.43007 17.2926 6.87634 17.4099 7.3356 17.4864L7.6644 15.5136C6.92149 15.3898 6.1752 15.1144 5.42909 14.7599C4.58157 14.3573 4 13.499 4 12.5C4 11.6653 4.20761 11.0085 4.55874 10.5257C4.90441 10.0504 5.4419 9.6703 6.24254 9.47014L7 9.28078V6C7 4.89543 7.89543 4 9 4ZM12 3.35418C11.2671 2.52376 10.1947 2 9 2C6.79086 2 5 3.79086 5 6V7.77422C4.14895 8.11644 3.45143 8.64785 2.94126 9.34933C2.29239 10.2415 2 11.3347 2 12.5C2 14.0652 2.79565 15.4367 4 16.2422V17.5C4 19.9853 6.01472 22 8.5 22C9.91363 22 11.175 21.3482 12 20.3287C12.825 21.3482 14.0864 22 15.5 22C17.9853 22 20 19.9853 20 17.5V16.2422C21.2044 15.4367 22 14.0652 22 12.5C22 11.3347 21.7076 10.2415 21.0587 9.34933C20.5486 8.64785 19.8511 8.11644 19 7.77422V6C19 3.79086 17.2091 2 15 2C13.8053 2 12.7329 2.52376 12 3.35418ZM12 3V5H18V3H12ZM11 7H6V17H11V7ZM13 7H18V17H13V7ZM11 19V21H6V19H11ZM13 19V21H18V19H13Z" />
              </svg>
              <h3
                className="benefit-title text-2xl font-bold mt-4"
                style={{ color: "#00df9a" }}
              >
                Machine Learning
              </h3>
              <p className="benefit-description text-lg mt-4">
                There’s a heavy focus on enhancing our ability to deliver
                results. Hear first hand from our employees about their passion
                for hard work and their dedication to quality.
              </p>
            </div>
            <div
              className="benefit-card text-center"
              style={{
                backgroundColor: "#000000",
                borderRadius: "16px",
                padding: "32px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1a202c";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="teal"
                width={"64px"}
                height={"64px"}
              >
                <path d="M12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4ZM13.77 3.77002L21.77 11.77C22.179 12.179 22.195 12.821 21.82 13.196L13.82 21.196C13.433 21.582 12.767 21.582 12.38 21.196L4.38001 13.196C4.00499 12.821 4.02099 12.179 4.42999 11.77L12.43 3.77002C12.605 3.59502 12.851 3.50002 13.11 3.50002C13.368 3.50002 13.614 3.59502 13.77 3.77002ZM14 6.58997L12 8.59002V15.41L14 13.41V6.58997ZM12 16.59L14 18.59V20.41C14 20.79 13.79 21.1 13.41 21.1H11.59C11.21 21.1 11 20.79 11 20.41V18.59L12 17.59V16.59Z" />
              </svg>
              <h3
                className="benefit-title text-2xl font-bold mt-4"
                style={{ color: "#00df9a" }}
              >
                Flexible Work Environment
              </h3>
              <p className="benefit-description text-lg mt-4">
                As a remote-first company, we offer flexibility and freedom to
                work from anywhere. This supports our team members in achieving
                work-life balance.
              </p>
            </div>
            <div
              className="benefit-card text-center"
              style={{
                backgroundColor: "#000000",
                borderRadius: "16px",
                padding: "32px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1a202c";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="teal"
                width={"64px"}
                height={"64px"}
              >
                <path d="M17.5 6.5L12 2L6.5 6.5V10H3V20H5V11.03L12 6L19 11.03V20H21V10H17.5V6.5Z" />
              </svg>
              <h3
                className="benefit-title text-2xl font-bold mt-4"
                style={{ color: "#00df9a" }}
              >
                Growth Opportunities
              </h3>
              <p className="benefit-description text-lg mt-4">
                We’re committed to helping employees grow in their careers. Our
                development programs are designed to support personal and
                professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
