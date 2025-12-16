import React from "react";

const PolicyLayout = ({ title, children }) => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-12">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-maroon">{title}</h1>
            <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
            <div className="divider mx-auto bg-gradient-maroon"></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

PolicyLayout.Card = ({ number, title, children }) => (
  <div className="policy-card card border-0 shadow-sm mb-4">
    <div className="card-body p-4">
      <h4 className="d-flex align-items-center mb-3">
        <span className="number-badge me-3">{number}</span>
        {title}
      </h4>
      {children}
    </div>
  </div>
);

export default PolicyLayout;
