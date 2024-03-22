import React from "react";

export default function Verify() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="mb-4">Enter Verification Code</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="verificationCode" className="form-label">
              Verification Code
            </label>
            <input type="text" className="form-control" id="verificationCode" />
          </div>
          <p className="mb-4">
            Did not receive yet? <a href="#">Resend</a>
          </p>
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
