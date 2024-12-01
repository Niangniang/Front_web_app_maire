import "./sideBar.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { MdGridView } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShieldExclamation } from "react-icons/hi";
import { LuLayoutTemplate } from "react-icons/lu";
import { HiOutlineLibrary } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { TbBriefcase } from "react-icons/tb";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { IoRadioSharp } from "react-icons/io5";
import { HiOutlineChartPie } from "react-icons/hi";
import { Link } from "react-router-dom";

function SideBar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisible_cif, setIsDropdownVisible_cif] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked_cif, setIsClicked_cif] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setIsClicked(!isClicked);
  };
  const toggleDropdown_cif = () => {
    setIsDropdownVisible_cif(!isDropdownVisible_cif);
    setIsClicked_cif(!isClicked_cif);
  };

  const divStyle = {
    borderRadius: isClicked ? "10px" : "0px",
    background: isClicked ? "#f8f8f8" : "",
  };
  const divStyle_cif = {
    borderRadius: isClicked_cif ? "10px" : "0px",
    background: isClicked_cif ? "#923B1D" : "",
  };

  return (
    <>
      <nav className="sidebar">
        <div className="logo">
          <img className="image1" src={logo} alt="logo_ma_mairie" />
        </div>
        <div className="navigation">
          <header>Navigation</header>
          <div className="tab_board1">
            {/* <Link to="/"> */}
            <MdGridView size={28} />
            <span>Tableau de bord</span>
            {/* </Link> */}
          </div>
          <ul className="myUL">
            <li className="nav_link myLI">
              <Link className="myA" to="/">
                <BiHome size={24} />
                <span>Accueil</span>
              </Link>
            </li>
            <li className="nav_link myLI">
              <Link className="myA" to="/statistiques">
                <HiOutlineChartPie size={24} />
                <span>Statistiques</span>
              </Link>
            </li>
            <li className="nav_link myLI">
              <Link className="myA" to="/notifications">
                <HiOutlineBell size={24} />
                <span>Notifications</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="modules">
          <header>Modules</header>
          <div className={"menu-deroulante"} onClick={toggleDropdown}>
            <div className="ma-menu" style={divStyle}>
              <div className="ma-menu-deroulante">
                <HiOutlineLibrary size={28} />
                <span>Ma Mairie</span>
              </div>
              <HiOutlineChevronDown size={24} />
            </div>
            {isDropdownVisible && (
              <ul className="myUL liste-deroulante">
                <li className="nav_link my-li">
                  <a className="myA" href="#">
                    <BiHome size={24} />
                    <span>Accueil</span>
                  </a>
                </li>
                <li className="nav_link my-li">
                  <Link className="myA" to="/rdvs">
                    <TbBriefcase size={24} />
                    <span>Rendez-vous</span>
                  </Link>
                </li>
                <li className="nav_link my-li">
                  <Link className="myA" to="/demandes">
                    <HiOutlineDocumentDuplicate size={30} />
                    <span>Demarches administratives</span>
                  </Link>
                </li>
                <li className="nav_link my-li">
                  <a className="myA" href="#">
                    <HiOutlinePresentationChartLine size={24} />
                    <span> Statistiques</span>
                  </a>
                </li>
                <li className="nav_link my-li">
                  <a className="myA" href="#">
                    <HiOutlineBell size={24} />
                    <span>Notifications</span>
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className={"menu-deroulante"} onClick={toggleDropdown_cif}>
            <div className="ma-menu" style={divStyle_cif}>
              <div className="ma-menu-deroulante">
                <LuLayoutTemplate size={28} />
                <span>CIF</span>
              </div>
              <HiOutlineChevronDown size={24} />
            </div>
            {isDropdownVisible_cif && (
              <ul className="myUL liste-deroulante">
                <li className="nav_link my-li">
                  <a className="myA" href="#">
                    <BiHome size={24} />
                    <span>Accueil</span>
                  </a>
                </li>
                <li className="nav_link my-li">
                  <Link className="myA" to="/biens">
                    <HiOutlineChartPie size={24} />
                    <span>Biens</span>
                  </Link>
                </li>
                <li className="nav_link my-li">
                  <a className="myA" href="#">
                    <HiOutlineBell size={24} />
                    <span>Notifications</span>
                  </a>
                </li>
                <li className="nav_link my-li">
                  <a className="myA" href="#">
                    <IoRadioSharp size={24} />
                    <span>Partage de données</span>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="navigation">
          <header>Modules</header>
          <div className="ma-menu">
            <Link className="myA" to="/profils">
              <div className="ma-menu-deroulante">
                <FaRegUser size={28} />
                <span>Profils</span>
              </div>
            </Link>
            <HiOutlineChevronDown size={24} />
          </div>
          <div className="ma-menu">
            <div className="ma-menu-deroulante">
              <FiSettings size={28} />
              <span>Settings</span>
            </div>
          </div>
          <div className="ma-menu">
            <div className="ma-menu-deroulante">
              <HiOutlineShieldExclamation size={28} />
              <span>Aide</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
