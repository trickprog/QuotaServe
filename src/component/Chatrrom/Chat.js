import React from "react";
import img from "../../assets/img/common/profile.png";
export default function Chat() {
  return (
    <>
      <div className="col-md-12">
        <div className="card-header">
          <h3>Chat with User</h3>
        </div>
        <div className="card-body h-75 overflow-auto ">
          <div className="d-flex my-3 ">
            <div class="d-flex justify-content-center align-items-center mr-4">
              <img src={img} alt="User 1" className="" />
            </div>
            <div class="card w-25 p-2 chat-bg-black text-white my-2">
              <p>User 1: Hello is this product avlaible today not not</p>
            </div>
          </div>
          <div className="d-flex my-3 flex-row-reverse">
            <div class="card w-25 p-2 bg-warning text-white my-2">
              <p>User 1: Hello is this product avlaible today not not</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
              />
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
