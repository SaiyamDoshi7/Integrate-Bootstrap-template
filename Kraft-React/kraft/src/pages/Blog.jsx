import React from "react";

function Blog() {
  return (

    <div className="agency-bg">

      <div className="container agency-content text-center">

        <h1 className="mb-5 display-4 fw-bold text-white">
          Agency Insights
        </h1>

        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="card bg-dark border-0 shadow-lg h-100">

              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="design trends"
              />

              <div className="card-body text-start">
                <h4 className="text-white">Modern Design Trends</h4>
                <p className="text-secondary">
                  Explore how minimalist layouts, bold typography and motion
                  design are shaping the future of digital experiences.
                </p>
              </div>

            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card bg-dark border-0 shadow-lg h-100">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEoA8YNXU-bDHZde75GtBuwdZu2pFOuzzsQ&s"
                className="card-img-top"
                alt="branding tips"
              />

              <div className="card-body text-start">
                <h4 className="text-white">Branding Strategies</h4>
                <p className="text-secondary">
                  Learn how strong visual identity and storytelling help brands
                  connect emotionally with modern audiences.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>

  );
}

export default Blog;