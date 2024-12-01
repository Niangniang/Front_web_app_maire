import "./App.css";
import SideBar from "./components/sidebar/sideBar";
import MenuBar from "./components/menubar/menuBar";
// import PanelGM from "./components/panelGM/panelGM";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/home";
import Statistique from "./pages/statistique/statistique";
import Notification from "./pages/notification/notification";
import Login from "./pages/login/login";
import Navbar from "./components/navbar/navbar";
import { storeUser } from "./services/authServices";
import Bien, { bienLoader } from "./pages/bien/bien";
import RDV from "./pages/RDV/RDV";

import { getAllRDV } from "./services/rdvServices";
import Demande from "./pages/demande/demande";
import Profil from "./pages/profil/profil";
import { getAllDemandes } from "./services/demandeServices";
import { getAllProfils } from "./services/profilsServices";
import DetailDemande from "./pages/detailDemande/detailDemande";
import { Toaster } from "react-hot-toast";

import NewUser from "./pages/newUser/newUser";
import { creneauLoader, Creneau } from "./pages/creneau/creneau";
import Register, { registerLoader } from "./pages/register/register";
import { getAllUsers } from "./services/userServices";

function App() {
  const combinedLoaderUserAndProfil = async () => {
    const usersData = await getAllUsers();
    const profilsData = await getAllProfils();

    // You can return an object with both data sets
    return {
      usersData,
      profilsData,
    };
  };

  const session = storeUser((state) => state.session);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="statistiques" element={<Statistique />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="biens" element={<Bien />} loader={bienLoader} />
        <Route path="/rdvs" element={<RDV />} loader={getAllRDV} />
        <Route path="/demandes" element={<Demande />} loader={getAllDemandes} />
        <Route path="/profils" element={<Profil />} loader={getAllUsers} />
        <Route path="/new-user" element={<NewUser />} loader={getAllUsers} />
        <Route path="/creneaux" element={<Creneau />} loader={creneauLoader} />

        <Route
          path="/demandes/:id"
          element={<DetailDemande />}
          // loader={getAllDemandes}
        />
      </Route>
    )
  );
  const authRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LoginRoot />}>
        <Route index element={<Login />} />
        <Route
          path="/register"
          element={<Register />}
          loader={registerLoader}
        />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={session.user ? router : authRouter} />
    </>
  );
}

const Root = () => {
  return (
    <div className="" style={{ overflowX: "hidden" }}>
      <Toaster />
      <div className="row row-cols-2 ">
        <div
          className="col col-xxl-3  col-xl-3"
          style={{ width: "20%", marginRight: "10px" }}
        >
          <SideBar />
        </div>
        <div className="col col-xxl-9 col-xl-9  ">
          <div
            className="row  menu-bar"
            style={{ width: "100%", marginRight: "0px" }}
          >
            <MenuBar />
          </div>
          {/* <div className="row row-cols-2">
              <PanelCif />
            </div> */}
          <div className="row">
            {/* <PanelGM /> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginRoot = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
