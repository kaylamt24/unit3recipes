import React from "react";
import './DetailScreen.css'
import '../homeComponents/Homepage.css'

const DetailImage = ({ image, title }) => {
  const backgroundString = `--background: url(${image})`
  return (
    <div className="banner"
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`
      }}
 
    >
      <div className="ad_text">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default DetailImage;