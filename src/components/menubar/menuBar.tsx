import { BsBellFill } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";

import "./menuBar.css";

import { storeUser } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";

function MenuBar() {
  const logout = storeUser((state) => state.logout);
  const navigate = useNavigate();
  const handleDisconnect = () => {
    logout();
    navigate("/");
  };
  const session = storeUser((state) => state.session);
  return (
    <>
      <div className="top-bar container-fluid" style={{}}>
        <div className="top-bar-item">
          <div className="icon-back">
            <TbArrowLeft size={22} onClick={() => navigate(-1)} />
          </div>
          <div className="icon-back">
            <TbArrowRight size={22} onClick={() => navigate(1)} />
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="search top-bar-item">
          <span
            style={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <GrFormSearch size={24} />
            <label htmlFor=""> Effectuer une recherche</label>
          </span>
        </div>
        <div></div>
        <div></div>

        <div className="top-bar-item">
          <BsBellFill size={24} color="#A8624A" />
          {/* <img src={session.user.} alt="pp" /> */}
          {` ${session.user.prenom} ${session.user.nom}`}
          <button className="btn btn-secondary sm" onClick={handleDisconnect}>
            deconnexion
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
