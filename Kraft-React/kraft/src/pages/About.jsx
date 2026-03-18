import React from "react";

function About() {
  return (

    <div className="agency-bg">

      <div className="container agency-content text-center">

        <h1 className="display-4 fw-bold text-white">About Our Studio</h1>

        <p className="lead text-secondary">
          KRAFT is a modern creative agency where bold ideas turn into
          powerful digital experiences, brand identities and innovative products.
        </p>

        <div className="row mt-5">

          <div className="col-md-4 mb-4">
            <img
              src="https://media.gettyimages.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=612x612&w=gi&k=20&c=6eNZA8XGYgYJmD1gS7oWmGxFF6BvmWtozndUAHkpF7M="
              className="img-fluid rounded shadow"
              alt="branding"
            />
            <h5 className="mt-3 text-white">Brand Strategy</h5>
            <p className="text-secondary">
              We craft strong brand identities that help businesses stand out in
              competitive markets.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <img
              src="https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2019/02/06153915/SHEYN-Shipping-Box-04-2.jpg"
              className="img-fluid rounded shadow"
              alt="creative team"
            />
            <h5 className="mt-3 text-white">Creative Experience</h5>
            <p className="text-secondary">
              Our team creates engaging digital experiences that connect brands
              with modern audiences.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <img
              src="https://media.istockphoto.com/id/518185738/photo/child-drawing-top-view-artwork-workplace-with-creative-accessories.jpg?s=612x612&w=0&k=20&c=VquqIgnEQRvjku7UPht4ehNnFPMqmSKwwopUmMjC0kY="
              className="img-fluid rounded shadow"
              alt="design work"
            />
            <h5 className="mt-3 text-white">Design Excellence</h5>
            <p className="text-secondary">
              We deliver premium design solutions with a focus on innovation,
              quality and performance.
            </p>
          </div>

        </div>

      </div>

    </div>

  );
}

export default About;