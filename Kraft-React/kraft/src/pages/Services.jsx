import React from "react";

function Services() {
  return (
    <div className="agency-bg">

      <div className="container agency-content text-center">

        <h1 className="mb-5 display-4 fw-bold text-white">
          Creative Solutions
        </h1>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card bg-dark border-0 shadow-lg p-3 h-100">

              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
                className="card-img-top mb-3"
                alt="branding"
              />

              <h5 className="text-white">Brand Identity</h5>
              <p className="text-secondary">
                We craft strong visual identities that help brands build trust
                and stand out in competitive markets.
              </p>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-dark border-0 shadow-lg p-3 h-100">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv05xgrzXpmEYaHm4RZp2BgM_5jsNmUQPg2w&s"
                className="card-img-top mb-3"
                alt="ui ux"
              />

              <h5 className="text-white">UI UX Design</h5>
              <p className="text-secondary">
                Designing intuitive and engaging digital experiences focused on
                usability and aesthetics.
              </p>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-dark border-0 shadow-lg p-3 h-100">

              <img
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80"
                className="card-img-top mb-3"
                alt="development"
              />

              <h5 className="text-white">Web Development</h5>
              <p className="text-secondary">
                Building fast, scalable and modern websites using the latest
                technologies.
              </p>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Services;