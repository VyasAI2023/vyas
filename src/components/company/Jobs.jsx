import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const jobList = [
  {
    title: "Full Stack Universe Engineer",
    location: "SF, NY, or Remote",
    department: "Engineering",
    link: "",
  },
  {
    title: "Account Executive",
    location: "NY, SF, or Remote",
    department: "Sales",
    link: "",
  },
  {
    title: "Applied Machine Learning Research Engineer",
    location: "NY, SF, or Remote",
    department: "Engineering",
    link: "",
  },
  {
    title: "Field Engineer",
    location: "NY, SF, or Remote",
    department: "Customer Success",
    link: "",
  },
  {
    title: "Full Stack Engineer",
    location: "NY, SF, or Remote",
    department: "Engineering",
    link: "",
  },
  {
    title: "Sales Development Representative",
    location: "NY, SF, or Remote",
    department: "Sales",
    link: "",
  },
  {
    title: "Former Founders",
    location: "NY, SF, DSM or Remote",
    department: "General Inquiry",
    link: "",
  },
  {
    title: "Full Stack Machine Learning Engineer",
    location: "NY, SF, or Remote",
    department: "Engineering",
    link: "",
  },
];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="text-center">
          <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">Jobs</h2>
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
                  <a href={job.link} className="jobcard-container w-inline-block">
                    <h3 className="jobcard_title text-white text-2xl mb-2 font-bold pl-32">{job.title}</h3>
                    <div className="jobcard_description text-white text-lg pl-32">
                      {job.location} &nbsp;/&nbsp; {job.department}
                    </div>
                  </a>
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
        <h2 id="benefits" className="text-center text-6xl mb-8 font-bold text-white">Benefits</h2><br/><br/>
        <div className="w-layout-grid benefit__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="benefit-card text-center" style={{ backgroundColor: "#ffffff", borderRadius: "16px", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "32px 20px", display: "flex" }}>
            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/613bdb703d78bdc61fdb1091_vacation.svg" alt="" className="iconbullet__image mx-auto mb-4" />
            <h6 className="benefit_bullet_title text-xl font-bold ">Unlimited Vacation</h6>
          </div>
          <div className="benefit-card text-center" style={{ backgroundColor: "#ffffff", borderRadius: "16px", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "32px 20px", display: "flex" }}>
            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/613bdc3ec3defc04442191c1_stock.svg" alt="" className="iconbullet__image mx-auto mb-4" />
            <h6 className="benefit_bullet_title text-xl font-bold ">Stock Options</h6>
          </div>
          <div className="benefit-card text-center" style={{ backgroundColor: "#ffffff", borderRadius: "16px", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "32px 20px", display: "flex" }}>
            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/613bdb70ba5cf7768293fbc2_health.svg" alt="" className="iconbullet__image mx-auto mb-4" />
            <h6 className="benefit_bullet_title text-xl font-bold ">100% of Health Care Premium Covered</h6>
          </div>
          <div className="benefit-card text-center" style={{ backgroundColor: "#ffffff", borderRadius: "16px", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "32px 20px", display: "flex" }}>
            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/613bdb70956cf3fc3cd10fc4_flex.svg" alt="" className="iconbullet__image mx-auto mb-4" />
            <h6 className="benefit_bullet_title text-xl font-bold ">Flexible Schedule</h6>
          </div>
          <div className="benefit-card text-center" style={{ backgroundColor: "#ffffff", borderRadius: "16px", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "32px 20px", display: "flex" }}>
            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/617b10c139a7b1c30282ec8f_parental.svg" alt="" className="iconbullet__image mx-auto mb-4" />
            <h6 className="benefit_bullet_title text-xl font-bold ">Parental Leave</h6>
          </div>
          <div className="benefit-card text-center" style={{ backgroundColor: "#ffffff", borderRadius: "16px", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "32px 20px", display: "flex" }}>
            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/617b10d35466f86d88f38005_travel.svg" alt="" className="iconbullet__image mx-auto mb-4" />
            <h6 className="benefit_bullet_title text-xl font-bold ">$2500/yr Travel Stipend</h6>
          </div>
          <div className="benefit-card text-center"style={{ backgroundColor: "#ffffff", borderRadius: "16px", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "32px 20px", display: "flex" }}>
            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/618055a4f4ff8b50e31d4b6a_productivity2.svg" alt="" className="iconbullet__image mx-auto mb-4" />
            <h6 className="benefit_bullet_title text-xl font-bold ">$350/mo Productivity Stipend</h6>
          </div>
          <div className="benefit-card text-center" style={{ backgroundColor: "#ffffff", borderRadius: "16px", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "32px 20px", display: "flex" }}>
            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/64b1bd9514f23de460083e5a_relocation.svg" alt="" className="iconbullet__image mx-auto mb-4" />
            <h6 className="benefit_bullet_title text-xl font-bold ">Relocation Stipend</h6>
          </div>
          <div className="benefit-card text-center" style={{ backgroundColor: "#ffffff", borderRadius: "16px", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "32px 20px", display: "flex" }}>
            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/613bdc3ec3defc04442191c1_stock.svg" alt="" className="iconbullet__image mx-auto mb-4" />
            <h6 className="benefit_bullet_title text-xl font-bold ">401k</h6>
          </div>
        </div><br/>
        <div className="hero_button_container w-container text-center mt-8">
          <a href="#Open-Positions" className="button w-button bg-[rgb(0,223,154)] text-white px-8 py-4 rounded-full">See Open Positions</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
