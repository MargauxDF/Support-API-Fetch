import "./App.css";
import { useState } from "react";

function App() {
  const [picture, setPicture] = useState({});

  const getPictureOfTheDay = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPicture(data);
      });
  };

  let media =
    picture.media_type === "video" ? (
      <iframe src={picture.url} title={picture.title}></iframe>
    ) : (
      <img src={picture.url} alt={picture.title} />
    );

  return (
    <div className="App">
      <button onClick={getPictureOfTheDay}>Get picture of the day</button>
      {media}
    </div>
  );
}

export default App;
