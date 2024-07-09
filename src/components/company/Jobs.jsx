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
          <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">
            Jobs
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
            <a href={job.link} className="jobcard-container w-inline-block">
              <h3 className="jobcard_title text-white text-2xl mb-2 font-bold pl-8 md:pl-32 text-left md:text-left">
                {job.title}
              </h3>
              <div className="jobcard_description text-white text-lg pl-8 md:pl-32 text-left md:text-left">
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
      <h2
  id="benefits"
  className="text-center text-4xl md:text-6xl mb-4 md:mb-8 font-bold text-white"
>
  Benefits
</h2>

        <br />
        <br />
        <div className="w-layout-grid benefit__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
    className="benefit-card text-center bg-white rounded-lg flex flex-col justify-center items-center p-8"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="teal"
      width="64px"
      height="64px"
    >
      <path d="M9 4C10.1046 4 11 4.89543 11 6V12.8271C10.1058 12.1373 8.96602 11.7305 7.6644 11.5136L7.3356 13.4864C8.71622 13.7165 9.59743 14.1528 10.1402 14.7408C10.67 15.3147 11 16.167 11 17.5C11 18.8807 9.88071 20 8.5 20C7.11929 20 6 18.8807 6 17.5V17.1493C6.43007 17.2926 6.87634 17.4099 7.3356 17.4864L7.6644 15.5136C6.92149 15.3898 6.1752 15.1144 5.42909 14.7599C4.58157 14.3573 4 13.499 4 12.5C4 11.6653 4.20761 11.0085 4.55874 10.5257C4.90441 10.0504 5.4419 9.6703 6.24254 9.47014L7 9.28078V6C7 4.89543 7.89543 4 9 4ZM12 3.35418C11.2671 2.52376 10.1947 2 9 2C6.79086 2 5 3.79086 5 6V7.77422C4.14895 8.11644 3.45143 8.64785 2.94126 9.34933C2.29239 10.2415 2 11.3347 2 12.5C2 14.0652 2.79565 15.4367 4 16.2422V17.5C4 19.9853 6.01472 22 8.5 22C9.91363 22 11.175 21.3482 12 20.3287C12.825 21.3482 14.0864 22 15.5 22C17.9853 22 20 19.9853 20 17.5V16.2422C21.2044 15.4367 22 14.0652 22 12.5C22 11.3347 21.7076 10.2415 21.0587 9.34933C20.5486 8.64785 19.8511 8.11644 19 7.77422V6C19 3.79086 17.2091 2 15 2C13.8053 2 12.7329 2.52376 12 3.35418ZM18 17.1493V17.5C18 18.8807 16.8807 20 15.5 20C14.1193 20 13 18.8807 13 17.5C13 16.167 13.33 15.3147 13.8598 14.7408C14.4026 14.1528 15.2838 13.7165 16.6644 13.4864L16.3356 11.5136C15.034 11.7305 13.8942 12.1373 13 12.8271V6C13 4.89543 13.8954 4 15 4C16.1046 4 17 4.89543 17 6V9.28078L17.7575 9.47014C18.5581 9.6703 19.0956 10.0504 19.4413 10.5257C19.7924 11.0085 20 11.6653 20 12.5C20 13.499 19.4184 14.3573 18.5709 14.7599C17.8248 15.1144 17.0785 15.3898 16.3356 15.5136L16.6644 17.4864C17.1237 17.4099 17.5699 17.2926 18 17.1493Z"></path>
    </svg>
    <h6 className="benefit_bullet_title text-xl font-bold mt-4">
      Solve real problems
    </h6>
    <p className="hidden sm:block mt-2">
      We solve real problems that matter to our customers and us. We don't chase ideas and trends. We solve problems for long-term value creation over short-term results.
    </p>
  </div>

  <div
    className="benefit-card text-center bg-white rounded-lg flex flex-col justify-center items-center p-8"
  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              fill="teal"
            >
              <path d="M5.00488 9.00281C5.55717 9.00281 6.00488 9.45052 6.00488 10.0028C7.63965 10.0028 9.14352 10.5632 10.3349 11.5023L12.5049 11.5028C13.8375 11.5028 15.0348 12.0821 15.8588 13.0025L19.0049 13.0028C20.9972 13.0028 22.7173 14.1681 23.521 15.8542C21.1562 18.9748 17.3268 21.0028 13.0049 21.0028C10.2142 21.0028 7.85466 20.3996 5.944 19.3449C5.80557 19.7284 5.43727 20.0028 5.00488 20.0028H2.00488C1.4526 20.0028 1.00488 19.5551 1.00488 19.0028V10.0028C1.00488 9.45052 1.4526 9.00281 2.00488 9.00281H5.00488ZM6.00589 12.0028L6.00488 17.0248L6.05024 17.0573C7.84406 18.3177 10.183 19.0028 13.0049 19.0028C16.0089 19.0028 18.8035 17.8472 20.84 15.8734L20.9729 15.7398L20.8537 15.6394C20.3897 15.2764 19.8205 15.0512 19.2099 15.0097L19.0049 15.0028L16.8934 15.0028C16.9664 15.3244 17.0049 15.6591 17.0049 16.0028V17.0028H8.00488V15.0028L14.7949 15.0018L14.7605 14.9233C14.38 14.1297 13.593 13.5681 12.6693 13.5081L12.5049 13.5028L9.57547 13.5027C8.66823 12.5773 7.40412 12.0031 6.00589 12.0028ZM4.00488 11.0028H3.00488V18.0028H4.00488V11.0028ZM18.0049 5.00281C19.6617 5.00281 21.0049 6.34595 21.0049 8.00281C21.0049 9.65966 19.6617 11.0028 18.0049 11.0028C16.348 11.0028 15.0049 9.65966 15.0049 8.00281C15.0049 6.34595 16.348 5.00281 18.0049 5.00281ZM18.0049 7.00281C17.4526 7.00281 17.0049 7.45052 17.0049 8.00281C17.0049 8.55509 17.4526 9.00281 18.0049 9.00281C18.5572 9.00281 19.0049 8.55509 19.0049 8.00281C19.0049 7.45052 18.5572 7.00281 18.0049 7.00281ZM11.0049 2.00281C12.6617 2.00281 14.0049 3.34595 14.0049 5.00281C14.0049 6.65966 12.6617 8.00281 11.0049 8.00281C9.34803 8.00281 8.00488 6.65966 8.00488 5.00281C8.00488 3.34595 9.34803 2.00281 11.0049 2.00281ZM11.0049 4.00281C10.4526 4.00281 10.0049 4.45052 10.0049 5.00281C10.0049 5.55509 10.4526 6.00281 11.0049 6.00281C11.5572 6.00281 12.0049 5.55509 12.0049 5.00281C12.0049 4.45052 11.5572 4.00281 11.0049 4.00281Z"></path>
            </svg>
            <h6 className="benefit_bullet_title text-xl font-bold mt-4">
              Be self-honest and accept failure
            </h6>
            <p className="hidden sm:block mt-2">
              Be self-honest to accept failures even when it is awkward and
              embarrassing, and have the courage to change.
            </p>
          </div>
          <div
    className="benefit-card text-center bg-white rounded-lg flex flex-col justify-center items-center p-8"
  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              fill="teal"
            >
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16.0043 12.8777C15.6589 12.3533 15.4097 11.9746 14.4622 12.1248C12.6717 12.409 12.4732 12.7224 12.3877 13.2375L12.3636 13.3943L12.3393 13.5597C12.2416 14.2428 12.2453 14.5012 12.5589 14.8308C13.8241 16.1582 14.582 17.115 14.8116 17.6746C14.9237 17.9484 15.2119 18.7751 15.0136 19.5927C16.2372 19.1066 17.3156 18.3332 18.1653 17.3559C18.2755 16.9821 18.3551 16.5166 18.3551 15.9518V15.8472C18.3551 14.9247 18.3551 14.504 17.7031 14.1314C17.428 13.9751 17.2227 13.881 17.0582 13.8064C16.691 13.6394 16.4479 13.5297 16.1198 13.0499C16.0807 12.9928 16.0425 12.9358 16.0043 12.8777ZM12 3.83333C9.68259 3.83333 7.59062 4.79858 6.1042 6.34896C6.28116 6.47186 6.43537 6.64453 6.54129 6.88256C6.74529 7.34029 6.74529 7.8112 6.74529 8.22764C6.74488 8.55621 6.74442 8.8672 6.84992 9.09302C6.99443 9.40134 7.6164 9.53227 8.16548 9.64736C8.36166 9.68867 8.56395 9.73083 8.74797 9.78176C9.25405 9.92233 9.64554 10.3765 9.95938 10.7412C10.0896 10.8931 10.2819 11.1163 10.3783 11.1717C10.4286 11.1356 10.59 10.9608 10.6699 10.6735C10.7307 10.4547 10.7134 10.2597 10.6239 10.1543C10.0648 9.49445 10.0952 8.2232 10.268 7.75495C10.5402 7.01606 11.3905 7.07058 12.012 7.11097C12.2438 7.12589 12.4626 7.14023 12.6257 7.11976C13.2482 7.04166 13.4396 6.09538 13.575 5.91C13.8671 5.50981 14.7607 4.9071 15.3158 4.53454C14.3025 4.08382 13.1805 3.83333 12 3.83333Z"></path>
            </svg>
            <h6 className="benefit_bullet_title text-xl font-bold mt-4">
              Work from anywhere
            </h6>
            <p className="hidden sm:block mt-2">
              The majority of the tribe works remotely, while many enjoy the
              benefits of hybrid workspaces in major cities around the world,
              and we work hard to make sure everyone feels involved.
            </p>
          </div>
          <div
    className="benefit-card text-center bg-white rounded-lg flex flex-col justify-center items-center p-8"
  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              fill="teal"
            >
              <path d="M20 13C20 15.2091 19.1046 17.2091 17.6569 18.6569L19.0711 20.0711C20.8807 18.2614 22 15.7614 22 13 22 7.47715 17.5228 3 12 3 6.47715 3 2 7.47715 2 13 2 15.7614 3.11929 18.2614 4.92893 20.0711L6.34315 18.6569C4.89543 17.2091 4 15.2091 4 13 4 8.58172 7.58172 5 12 5 16.4183 5 20 8.58172 20 13ZM15.293 8.29297 10.793 12.793 12.2072 14.2072 16.7072 9.70718 15.293 8.29297Z"></path>
            </svg>
            <h6 className="benefit_bullet_title text-xl font-bold mt-4">
              Speed matters
            </h6>
            <p className="hidden sm:block mt-2">We are biased towards action and results.</p>
          </div>
          <div
    className="benefit-card text-center bg-white rounded-lg flex flex-col justify-center items-center p-8"
  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              fill="teal"
            >
              <path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path>
            </svg>
            <h6 className="benefit_bullet_title text-xl font-bold mt-4">
              Be with the best
            </h6>
            <p className="hidden sm:block mt-2">
              We surround ourselves with the best people, technology and tools
              to achieve something special together at VyasAI.
            </p>
          </div>
          <div
    className="benefit-card text-center bg-white rounded-lg flex flex-col justify-center items-center p-8"
  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              fill="teal"
            >
              <path d="M13.0049 16.9409V19.0027H18.0049V21.0027H6.00488V19.0027H11.0049V16.9409C7.05857 16.4488 4.00488 13.0824 4.00488 9.00275V3.00275H20.0049V9.00275C20.0049 13.0824 16.9512 16.4488 13.0049 16.9409ZM6.00488 5.00275V9.00275C6.00488 12.3165 8.69117 15.0027 12.0049 15.0027C15.3186 15.0027 18.0049 12.3165 18.0049 9.00275V5.00275H6.00488ZM1.00488 5.00275H3.00488V9.00275H1.00488V5.00275ZM21.0049 5.00275H23.0049V9.00275H21.0049V5.00275Z"></path>
            </svg>
            <h6 className="benefit_bullet_title text-xl font-bold mt-4">
              Deliver awesome results
            </h6>
            <p className="hidden sm:block mt-2">
              Focus on the key inputs and results. Deliver with an awesome
              quality and in a timely manner. Despite difficulties, rise to the
              occasion and never compromise.
            </p>
          </div>
        </div>
        <br />
        <div className="hero_button_container w-container text-center mt-8">
  <a
    href="#Open-Positions"
    className="button w-button bg-[rgb(0,223,154)] text-white px-4 py-2 md:px-8 md:py-4 rounded-full text-sm md:text-base"
  >
    See Positions
  </a>
</div>

      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
