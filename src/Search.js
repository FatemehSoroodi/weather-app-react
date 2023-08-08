import React from "react";
export default function Search() {
  return (
    <div className="Search">
      <form className="mb-3">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-5">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary search w-100"
            />
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
