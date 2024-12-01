// PhotoGrid.js
import React from "react";
import PhotoItem from "../photoItem/photoItem";

interface PhotoGridProps {
  photoUrls: string[]; // An array of photo URLs
  photosPerRow: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photoUrls, photosPerRow }) => {
  let photosInRow = 0;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {photoUrls.map((src, index) => {
          // Vérifier si le nombre d'images dans la ligne actuelle a atteint la limite
          if (photosInRow === photosPerRow) {
            return null; // Ne rien afficher si la limite est atteinte
          }

          photosInRow++; // Incrémenter le nombre d'images dans la ligne actuelle

          return <PhotoItem key={index} src={src} alt={`Photo ${index + 1}`} />;
        })}
      </div>
    </div>
  );
};

export default PhotoGrid;
