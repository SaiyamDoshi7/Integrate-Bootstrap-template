import React from "react";

function Gallery() {
  return (
    <div className="agency-bg">

      <div className="container agency-content text-center">

        <h1 className="mb-5 display-4 fw-bold text-white">
          Our Portfolio
        </h1>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card bg-dark border-0 shadow-lg h-100">

              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="branding project"
              />

              <div className="card-body">
                <h5 className="text-white">Brand Identity</h5>
                <p className="text-secondary">
                  Crafting modern brand visuals that build strong market presence.
                </p>
              </div>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-dark border-0 shadow-lg h-100">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSca8EmLH7REOmH3IwJhvywitg85ydSe-LgA&s"
                className="card-img-top"
                alt="ui ux project"
              />

              <div className="card-body">
                <h5 className="text-white">UI UX Design</h5>
                <p className="text-secondary">
                  Designing engaging interfaces focused on user experience.
                </p>
              </div>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-dark border-0 shadow-lg h-100">

              <img
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="web development"
              />

              <div className="card-body">
                <h5 className="text-white">Web Development</h5>
                <p className="text-secondary">
                  Building high performance websites with modern technologies.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Gallery;