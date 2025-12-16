import React from "react";

const TermsAndConditions = () => {
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
                      <h6 className="fw-semibold mb-1">Acceptance of Terms</h6>
                      <p className="text-muted mb-0">
                        By accessing or using the Go-Cut application, you agree
                        to comply with and be bound by these Terms & Conditions.
                        If you do not agree with any part of these terms, please
                        discontinue using the app.
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
                      <h6 className="fw-semibold mb-1">Account Registration</h6>
                      <p className="text-muted mb-0">
                        Users must provide accurate, complete, and up-to-date
                        information during registration. Go-Cut reserves the
                        right to suspend or terminate accounts with false or
                        misleading details.
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
                      <h6 className="fw-semibold mb-1">Salon Bookings</h6>
                      <p className="text-muted mb-0">
                        All salon bookings are subject to availability and
                        confirmation by the respective salon. Go-Cut acts only
                        as a booking platform and does not directly provide salon
                        services.
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
                      <h6 className="fw-semibold mb-1">Wallet Usage</h6>
                      <p className="text-muted mb-0">
                        Wallet balances may be used for bookings, offers, and
                        promotions on the platform. Wallet funds are
                        non-transferable and subject to applicable cancellation
                        and refund policies.
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
                      <h6 className="fw-semibold mb-1">Termination</h6>
                      <p className="text-muted mb-0">
                        Go-Cut reserves the right to suspend or permanently
                        terminate user accounts that violate these Terms &
                        Conditions or misuse the platform in any manner.
                      </p>
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

export default TermsAndConditions;
