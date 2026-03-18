import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="agency-bg">

      <div className="container agency-content text-center">

        <h1 className="display-4 fw-bold text-white mb-3">
          Start Your Project
        </h1>

        <p className="text-secondary mb-5">
          Tell us about your idea. Our creative team will craft a powerful
          digital experience for your brand.
        </p>

        <form className="card bg-dark border-0 shadow-lg p-4 mx-auto" 
              style={{ maxWidth: "600px" }} 
              onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Your Name"
            className="form-control mb-3 bg-black text-white border-secondary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="form-control mb-3 bg-black text-white border-secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Project Details"
            className="form-control mb-3 bg-black text-white border-secondary"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="btn btn-outline-light w-100 rounded-pill">
            Send Inquiry
          </button>

        </form>

        {sent && (
          <p className="text-success mt-4">
            ✅ Your inquiry has been sent successfully!
          </p>
        )}

      </div>

    </div>
  );
}

export default Contact;