import { AiOutlinePlus } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import PhotoItem from "../photoItem/photoItem";
import { Link, useLoaderData } from "react-router-dom";
import { UserType } from "../../types/profils";
import PhotoGrid from "../photoGrid/photoGrid";
const Photo_bos: React.FC = () => {
  const profils = useLoaderData() as UserType[];
  const profilsAdmins = profils.filter(
    (pfl) => pfl.profil.intitule !== "Particulier"
  );
  console.log("LONGUEUR" + profilsAdmins.length);

  // Extract the 'photoUrl' from each profile and create an array of photo URLs
  const photoUrls = profilsAdmins.map((profil) => profil.attachement);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <span
          style={{ fontWeight: "bold", fontSize: "18px", marginLeft: "5px" }}
        >
          Gestion des profils
        </span>
        <Link to="/new-user">
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#923B1D",
              borderRadius: "10px",
              color: "rgba(255, 255, 255, 0.8)",
              height: "40px",
              textAlign: "center",
              marginTop: "5px",
              fontSize: "12px",
            }}
          >
            <label htmlFor="">Nouveau utilisateur</label>{" "}
            <AiOutlinePlus size={20} color="#FFFFFF" />
          </span>
        </Link>
      </div>
      <div
        // className="row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          marginTop: "25px",
          //   background: "red",
        }}
      >
        <span
          style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "5px" }}
        >
          Tous les administrateurs
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <span style={{ background: "#F9F9F9" }}>
            <TbArrowLeft size={22} />
          </span>
          <span style={{ background: "#F9F9F9" }}>
            <TbArrowRight size={22} />
          </span>
        </div>
      </div>
      <div className="row row-cols-2">
        <div
          className="col-8"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            marginTop: "25px",
          }}
        >
          <span
            style={{
              marginLeft: "5px",
              display: "flex",
              background: "#F9F9F9",
              width: "50%",
              borderRadius: "12px",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "40px",
            }}
          >
            <BiSearchAlt2 /> <label htmlFor="">Effectuer une recherche</label>
          </span>
          <span
            style={{
              background: "#F9F9F9",
              width: "16%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            par role <BiChevronDown size={30} />
          </span>
          <span
            style={{
              background: "#F9F9F9",
              width: "16%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            par statut <BiChevronDown size={30} />
          </span>
        </div>
      </div>
      <div>
        <div>
          {/* Pass the array of photo URLs to the PhotoGrid component */}
          <PhotoGrid photoUrls={photoUrls} photosPerRow={12} />
        </div>
      </div>
    </div>
  );
};

export default Photo_bos;
