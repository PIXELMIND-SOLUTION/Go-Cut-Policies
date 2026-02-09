import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container my-5 px-3 px-md-5">

      {/* Header */}
      <div className="text-center mb-5">
        <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: "#800000" }}>
          Legal
        </span>

        <h1 className="fw-bold mt-2 text-dark">Privacy Policy</h1>

        <p className="text-muted">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Card */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">

              <ul className="list-group list-group-flush">

                <li className="list-group-item border-0 mb-3">
                  <h6 className="fw-semibold">1. Information We Collect</h6>
                  <p className="text-muted mb-0">
                    GoCut Beauty App collects personal information such as your
                    name, mobile number, email address, age, gender, residential
                    address, and optional referral ID to ensure a smooth and
                    reliable salon booking experience.
                  </p>
                </li>

                <li className="list-group-item border-0 mb-3">
                  <h6 className="fw-semibold">2. Profile Information</h6>
                  <p className="text-muted mb-0">
                    Users can update their profile details including profile
                    image, name, email, phone number, age, gender, and address
                    directly from the app at any time.
                  </p>
                </li>

                <li className="list-group-item border-0 mb-3">
                  <h6 className="fw-semibold">3. How We Use Your Data</h6>
                  <p className="text-muted mb-0">
                    Your data is used to manage bookings, send appointment
                    notifications, process wallet transactions, improve service
                    quality, and provide customer support.
                  </p>
                </li>

                <li className="list-group-item border-0 mb-3">
                  <h6 className="fw-semibold">4. Data Security</h6>
                  <p className="text-muted mb-0">
                    We implement appropriate technical and organizational
                    measures to safeguard your personal data from unauthorized
                    access, misuse, or disclosure.
                  </p>
                </li>

                {/* COMPANY INFO */}
                <li className="list-group-item border-0 mb-3">
                  <h6 className="fw-semibold">5. Company Information</h6>
                  <p className="text-muted mb-1">
                    This application is owned and operated by:
                  </p>

                  <p className="mb-1 fw-semibold">
                    Brando Global Technologies Pvt Ltd
                  </p>

                  <p className="mb-1">
                    Owner: Ramachandra Reddy
                  </p>

                  <p className="mb-1">
                    #26/2, Ramachandra Building, 2nd Main, 1st Cross,  
                    Chinnamma Layout, Madiwala, Maruti Nagar,  
                    Bangalore - 560068, India
                  </p>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.digitalraiz.gouser"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-semibold text-decoration-none"
                    style={{ color: "#800000" }}
                  >
                    View App on Google Play
                  </a>
                </li>

                {/* CONTACT */}
                <li className="list-group-item border-0">
                  <h6 className="fw-semibold">6. Contact Us</h6>

                  <p className="text-muted mb-1">
                    If you have questions regarding this Privacy Policy, contact:
                  </p>

                  <a
                    href="mailto:support@gocutapp.com"
                    className="fw-semibold text-decoration-none"
                    style={{ color: "#800000" }}
                  >
                    support@gocutapp.com
                  </a>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-5">
        <span
          className="badge px-3 py-2"
          style={{ backgroundColor: "#f5eaea", color: "#800000" }}
        >
          © {new Date().getFullYear()} Brando Global Technologies Pvt Ltd. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
