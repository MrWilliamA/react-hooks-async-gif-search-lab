import React from "react";

const GifList = ({ gifData }) => {
  return (
    <ul>
      {gifData.map((gif) => (
        <li key={gif}>
          <img src={gif} alt={gif} />
        </li>
      ))}
    </ul>
  );
};

export default GifList;
