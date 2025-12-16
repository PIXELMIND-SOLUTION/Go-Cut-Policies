import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container my-5 px-3 px-md-5">

      {/* Header */}
      <div className="text-center mb-5">
        <span
          className="badge px-3 py-2 mb-2"
          style={{ backgroundColor: "#800000" }}
        >
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

                {/* Point 1 */}
                <li className="list-group-item border-0 mb-3">
                  <div className="d-flex align-items-start gap-3">
                    <span
                      className="badge rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#800000",
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      1
                    </span>
                    <div>
                      <h6 className="fw-semibold mb-1">
                        Information We Collect
                      </h6>
                      <p className="text-muted mb-0">
                        Go-Cut collects personal information such as your name,
                        mobile number, email address, age, gender, residential
                        address, and optional referral ID to ensure a smooth and
                        reliable salon booking experience.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Point 2 */}
                <li className="list-group-item border-0 mb-3">
                  <div className="d-flex align-items-start gap-3">
                    <span
                      className="badge rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#800000",
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      2
                    </span>
                    <div>
                      <h6 className="fw-semibold mb-1">
                        Profile Information
                      </h6>
                      <p className="text-muted mb-0">
                        Users can update their profile details including profile
                        image, name, email, phone number, age, gender, and
                        address directly from the Go-Cut app at any time.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Point 3 */}
                <li className="list-group-item border-0 mb-3">
                  <div className="d-flex align-items-start gap-3">
                    <span
                      className="badge rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#800000",
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      3
                    </span>
                    <div>
                      <h6 className="fw-semibold mb-1">
                        How We Use Your Data
                      </h6>
                      <p className="text-muted mb-0">
                        Your data is used to manage bookings, send appointment
                        notifications, process wallet transactions, improve
                        service quality, and provide customer support.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Point 4 */}
                <li className="list-group-item border-0 mb-3">
                  <div className="d-flex align-items-start gap-3">
                    <span
                      className="badge rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#800000",
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      4
                    </span>
                    <div>
                      <h6 className="fw-semibold mb-1">Data Security</h6>
                      <p className="text-muted mb-0">
                        We use appropriate technical and organizational security
                        measures to protect your personal data against
                        unauthorized access, misuse, or disclosure.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Point 5 */}
                <li className="list-group-item border-0">
                  <div className="d-flex align-items-start gap-3">
                    <span
                      className="badge rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#800000",
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      5
                    </span>
                    <div>
                      <h6 className="fw-semibold mb-1">Contact Us</h6>
                      <p className="text-muted mb-1">
                        If you have any questions regarding this Privacy Policy,
                        please contact us at:
                      </p>
                      <a
                        href="mailto:support@gocutapp.com"
                        className="fw-semibold text-decoration-none"
                        style={{ color: "#800000" }}
                      >
                        support@gocutapp.com
                      </a>
                    </div>
                  </div>
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
          © {new Date().getFullYear()} Go-Cut. All rights reserved.
        </span>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
