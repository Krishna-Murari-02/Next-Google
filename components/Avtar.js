import React from "react";

function Avtar({ url }) {
  return (
    <img
      className="h-10 w-10 rounded-full cursor-pointer transition
       duration-150 transform hover:scale-110"
      loading="lazy"
      src={url}
      alt="profile pics"
    />
  );
}

export default Avtar;