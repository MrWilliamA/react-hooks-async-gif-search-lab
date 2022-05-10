import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("dogs");

  useEffect(() => {
    const API_KEY = "N247iZoJoFCI18uQGJc1UqtQZ0e1nsGV";
    let URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        let gifsArray = data.data.map((gif) => gif.images.original.url);
        setGifs(gifsArray);
      });
  }, [query]);

  return (
    <div style={{ display: "flex" }}>
      <GifList gifData={gifs} />
      <GifSearch dummyValue="123" onSearch={setQuery} />
    </div>
  );
};

export default GifListContainer;
