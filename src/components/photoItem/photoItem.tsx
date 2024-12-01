import React from "react";
import { baseUrlCIF } from "../../services/settings";

interface PhotoItemProps {
  src: string;
  alt: string; // Specify the type for the 'alt' prop
}

const PhotoItem: React.FC<PhotoItemProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "150px",
        height: "150px",
        margin: "14px",
        background: "#F0F6FF",
        borderRadius: "10px",
      }}
    />
  );
};

export default PhotoItem;
