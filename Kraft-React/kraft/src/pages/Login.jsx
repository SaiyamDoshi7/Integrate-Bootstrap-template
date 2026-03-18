import React from "react";

function Login(){
  return(

    <div className="agency-bg">

      <div className="container agency-content text-center">

        <h1 className="display-5 fw-bold text-white mb-3">
          Client Login
        </h1>

        <p className="text-secondary mb-4">
          Access your project dashboard and manage creative workflows.
        </p>

        <div 
          className="card bg-dark border-0 shadow-lg p-4 mx-auto"
          style={{ maxWidth:"450px" }}
        >

          <input 
            className="form-control mb-3 bg-black text-white border-secondary"
            placeholder="Email"
          />

          <input 
            className="form-control mb-3 bg-black text-white border-secondary"
            placeholder="Password"
            type="password"
          />

          <button className="btn btn-outline-light rounded-pill w-100">
            Login
          </button>

        </div>

      </div>

    </div>

  )
}

export default Login