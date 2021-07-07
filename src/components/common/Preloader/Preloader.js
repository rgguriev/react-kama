import React from 'react';
import image from "../../../components/common/Preloader/preloader.svg";

const Preloader = () => {
  return (
    <div>
      <img src={image} alt="preloader"/>
    </div>
  );
};

export default Preloader;
