import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container my-5 px-3 px-md-5">

      {/* Header */}
      <div className="text-center mb-5">
        <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: "#800000" }}>
          Legal
        </span>

        <h1 className="fw-bold mt-2">Terms & Conditions</h1>

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
                  <h6 className="fw-semibold">1. Acceptance of Terms</h6>
                  <p className="text-muted mb-0">
                    By accessing or using the GoCut Beauty App, you agree to be
                    bound by these Terms & Conditions.
                  </p>
                </li>

                <li className="list-group-item border-0 mb-3">
                  <h6 className="fw-semibold">2. Account Registration</h6>
                  <p className="text-muted mb-0">
                    Users must provide accurate and up-to-date information.
                    Accounts with false details may be suspended.
                  </p>
                </li>

                <li className="list-group-item border-0 mb-3">
                  <h6 className="fw-semibold">3. Salon Bookings</h6>
                  <p className="text-muted mb-0">
                    GoCut acts as a booking platform and does not directly
                    provide salon services.
                  </p>
                </li>

                <li className="list-group-item border-0 mb-3">
                  <h6 className="fw-semibold">4. Wallet Usage</h6>
                  <p className="text-muted mb-0">
                    Wallet balances are non-transferable and subject to refund
                    policies.
                  </p>
                </li>

                <li className="list-group-item border-0 mb-3">
                  <h6 className="fw-semibold">5. Termination</h6>
                  <p className="text-muted mb-0">
                    We reserve the right to suspend accounts that violate these
                    terms.
                  </p>
                </li>

                {/* COMPANY INFO */}
                <li className="list-group-item border-0">
                  <h6 className="fw-semibold">6. Company Information</h6>

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

export default TermsAndConditions;
