import React, { useState } from "react";

const GifSearch = ({ onSearch, dummyValue }) => {
  //   console.log(dummyValue);

  const [searchQuery, setSearchQuery] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    // console.log("do code for submit");
  };
  let handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="search">Enter search keyword:</label>
          <input
            type="text"
            id="search"
            className="form-control"
            value={searchQuery}
            onChange={handleChange}
          />

          <button className="btn btn-success" type="submit">
            Find Gif
          </button>
        </div>
      </form>
    </div>
  );
};

export default GifSearch;
