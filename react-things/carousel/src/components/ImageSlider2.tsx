import { ArrowBigLeft, ArrowBigRight, CircleDotIcon, CircleIcon } from "lucide-react";
import React, { useState } from "react";
import "./slider1.css";

const ImageSlider2 = ({ images }: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const onClickPrevious = () => {
    setImageIndex(imageIndex === 0 ? images?.length - 1 : imageIndex - 1);
  };

  const onClickNext = () => {
    setImageIndex(imageIndex === images?.length - 1 ? 0 : imageIndex + 1);
  };
  return (
    <div>
      <h3>Slider 2 - Intermediate</h3>
      <div
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "10 / 5",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
          }}
        >
          {images.map((img) => (
            <img
              src={img}
              alt={`slide image - ${img}`}
              className="img-slider-img1"
              style={{
                translate: `${-100 * imageIndex}%`,
              }}
            />
          ))}
        </div>
        <button
          onClick={onClickPrevious}
          className="img-slider-btn"
          style={{ left: 0 }}
        >
          <ArrowBigLeft />
        </button>
        <button
          onClick={onClickNext}
          className="img-slider-btn btn-right"
          style={{ right: 0 }}
        >
          <ArrowBigRight />
        </button>
        <div
          style={{
            position: "absolute",
            bottom: ".5rem",
            left: "50%",
            translate: "-50%",
            display: 'flex',
            gap: '0.25rem'
          }}
        >
          {images.map((_, index) => (
            <button
              onClick={() => {
                setImageIndex(index);
              }}
              key={index}
              className="img-slider-dot-btn"
            >
              {index === imageIndex ? <CircleDotIcon/> : <CircleIcon/>}
              {/* {index + 1} */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider2;
