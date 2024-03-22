import React from "react";

export default function NotFound() {
  return (
    <div class="container my-3">
      <div class="card p-4">
        <h2 class="mb-4">
          Sorry, the item you are looking for is not available
        </h2>
        <p class="mb-4">
          At the moment, but if you would like us to notify you when one goes on
          sale, please provide the following information:
        </p>
        <form>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="name" class="form-label">
                Name
              </label>
              <input type="text" class="form-control" id="name" />
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="col-md-6">
              <label for="phone" class="form-label">
                Phone
              </label>
              <input type="text" class="form-control" id="phone" />
            </div>
            <div class="col-md-6">
              <label for="address" class="form-label">
                Address
              </label>
              <input type="text" class="form-control" id="address" />
            </div>
            <div class="col-md-4">
              <label for="city" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="city" />
            </div>
            <div class="col-md-4">
              <label for="state" class="form-label">
                State
              </label>
              <input type="text" class="form-control" id="state" />
            </div>
            <div class="col-md-4">
              <label for="zipcode" class="form-label">
                Zip Code
              </label>
              <input type="text" class="form-control" id="zipcode" />
            </div>
            <div class="col-md-6">
              <label for="country" class="form-label">
                Country
              </label>
              <input type="text" class="form-control" id="country" />
            </div>
            <div class="col-md-6">
              <label for="comments" class="form-label">
                Item
              </label>
              <input type="text" class="form-control" id="Item" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
