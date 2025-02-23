import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React, { useState } from "react";
import "./slider1.css";

const ImageSlider1 = ({ images }: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const onClickPrevious = () => {
    setImageIndex(imageIndex === 0 ? images?.length - 1 : imageIndex - 1);
  };

  const onClickNext = () => {
    setImageIndex(imageIndex === images?.length - 1 ? 0 : imageIndex + 1);
  };
  return (
    <div>
      <h3>Slider 1 - Basic</h3>
      <div style={{ width: '100%', height: '100%', aspectRatio: '10 / 5', position: 'relative'}}>
        <img
          src={images?.[imageIndex]}
          alt={`slide image - ${images?.[imageIndex]}`}
          className="img-slider-img1"
        />
        <button onClick={onClickPrevious} className="img-slider-btn" style={{ left: 0}}>
          <ArrowBigLeft />
        </button>
        <button onClick={onClickNext} className="img-slider-btn btn-right" style={{ right: 0}}>
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider1;
