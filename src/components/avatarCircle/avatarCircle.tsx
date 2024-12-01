import React from "react";
import "./avatarCircle.css"; // Import the CSS file for your custom styles

interface AvatarCircleProps {
  src: string;
  alt: string;
}

const AvatarCircle: React.FC<AvatarCircleProps> = ({ src, alt }) => {
  return <img className="avatar-circle" src={src} alt={alt} />;
};

export default AvatarCircle;
