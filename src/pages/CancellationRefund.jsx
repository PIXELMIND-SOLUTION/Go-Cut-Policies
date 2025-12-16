import React from "react";

const CancellationPolicy = () => {
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
        <h1 className="fw-bold mt-2">Cancellation & Refund Policy</h1>
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
                      <h6 className="fw-semibold mb-1">Cancellation Policy</h6>
                      <p className="text-muted mb-1">
                        At <strong>Go-Cut</strong>, we aim to provide a seamless
                        salon booking experience. Users may cancel salon
                        appointments subject to the conditions below.
                      </p>
                      <p className="text-muted mb-1">
                        Appointments cancelled at least <strong>24 hours</strong>{" "}
                        before the scheduled time are generally eligible for a
                        full refund. Cancellations made within 24 hours may
                        qualify for a partial refund depending on the salon’s
                        cancellation rules.
                      </p>
                      <p className="text-muted mb-0">
                        Failure to attend a booked appointment (no-show) may
                        result in <strong>no refund</strong>.
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
                      <h6 className="fw-semibold mb-1">Refund Policy</h6>
                      <p className="text-muted mb-0">
                        Refunds are applicable only for eligible cancellations
                        in accordance with Go-Cut and partner salon policies.
                        Refund eligibility may vary based on service type,
                        booking time, and salon-specific rules. Once a service
                        has been fully delivered, refunds will not be provided.
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
                        Refund Method & Timeline
                      </h6>
                      <p className="text-muted mb-0">
                        Approved refunds will be credited to the original
                        payment method or to the Go-Cut wallet, as applicable.
                        Refunds are typically processed within{" "}
                        <strong>5–7 working days</strong> after approval.
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
                      <h6 className="fw-semibold mb-1">
                        Salon-Initiated Cancellations
                      </h6>
                      <p className="text-muted mb-0">
                        If a salon cancels an appointment due to unforeseen
                        circumstances, users may choose to reschedule the
                        appointment or receive a full refund without any
                        cancellation charges.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Point 5 */}
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
                      5
                    </span>
                    <div>
                      <h6 className="fw-semibold mb-1">
                        How to Request Cancellation or Refund
                      </h6>
                      <p className="text-muted mb-1">
                        Users can cancel appointments directly through the
                        Go-Cut app. For refund-related queries or assistance,
                        please contact our support team with your booking
                        details.
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

                {/* Point 6 */}
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
                      6
                    </span>
                    <div>
                      <h6 className="fw-semibold mb-1">Contact Us</h6>
                      <p className="text-muted mb-0">
                        If you have any questions regarding this Cancellation &
                        Refund Policy, feel free to reach out to us.
                        <br />
                        <strong>App Name:</strong> Go-Cut
                        <br />
                        <strong>Email:</strong>{" "}
                        <a
                          href="mailto:support@gocutapp.com"
                          className="fw-semibold text-decoration-none"
                          style={{ color: "#800000" }}
                        >
                          support@gocutapp.com
                        </a>
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

export default CancellationPolicy;
