// import {
//   AiOutlineEye,
//   AiOutlineEyeInvisible,
//   AiOutlinePlus,
// } from "react-icons/ai";
// import "./newUser.css";
// import { MdToggleOff, MdToggleOn } from "react-icons/md";
// import { FormEvent, useEffect, useRef, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { ProfilType } from "../../types/profils";
// import { BiSearchAlt2 } from "react-icons/bi";

// import { getAllProfils } from "../../services/profilsServices";
// import { AddUser, UserType } from "../../types/user";
// import { addUser } from "../../services/userServices";

const NewUser = () => {
  // const users = useLoaderData() as UserType[];
  // const firstTenUsers = users.slice(0, 10);

  // const [profils, setProfils] = useState<ProfilType[]>([]);
  // const [password, setPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [isActive, setIsActive] = useState<boolean>(false);
  // const [showPassword, setShowPassword] = useState(false);
  // const [showNewPassword, setShowNewPassword] = useState(false);
  // const [passwordsMatch, setPasswordsMatch] = useState(true);

  // const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  // const [nom, setNom] = useState("");
  // const [prenom, setPrenom] = useState("");
  // const [email, setEmail] = useState("");
  // const [profil, setProfil] = useState("");
  // const [statut, setStatut] = useState(false);
  // const [tel, setTel] = useState("");
  // const [adresse, setAdresse] = useState("");
  // const [CNI, setCNI] = useState("");
  // const [codeZip, setCodeZip] = useState("");
  // const [dateNaissance, setDateNaissance] = useState("");
  // const [lieuNaissance, setlieuNaissance] = useState("");
  // const [nationalite, setNationalite] = useState("");
  // const [dateExpiration, setDateExpiration] = useState("");
  // const [dateEmission, setDateEmission] = useState("");
  // const [lieuEmission, setLieuEmission] = useState("");
  // const [attachement, setAttachement] = useState();

  // useEffect(() => {
  //   const fetchProfils = async () => {
  //     try {
  //       const usersData = await getAllProfils();
  //       setProfils(usersData);
  //       // Afficher les profils dans la console
  //       console.log("Profils récupérés :", usersData);
  //     } catch (error: any) {
  //       console.error(
  //         "Erreur lors de la récupération des profils :",
  //         error.message
  //       );
  //     }
  //   };

  //   fetchProfils();
  // }, []);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   if (name === "email") {
  //     setEmail(value);
  //   }
  //   if (name === "password") {
  //     setPassword(value);
  //   } else if (name === "newPassword") {
  //     setNewPassword(value);
  //   }
  // };

  // const handleToggleChange = () => {
  //   setIsActive((prevIsActive) => !prevIsActive); // Inverse the value of isActive when the toggle is clicked
  // };

  // // Function to generate a random color
  // const getRandomColor = (): string => {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  // const handleCreateUser = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const newUser: AddUser = {
  //       nom,
  //       prenom,
  //       email,
  //       password,
  //       profil,
  //       statut,
  //       tel,
  //       adresse,
  //       CNI,
  //       codeZip,
  //       dateNaissance,
  //       lieuNaissance,
  //       nationalite,
  //       dateExpiration,
  //       dateEmission,
  //       lieuEmission,
  //       attachement,
  //     };

  //     if (password !== newPassword) {
  //       setPasswordsMatch(false);
  //       return; // Arrêter le traitement si les mots de passe ne correspondent pas
  //     }

  //     // Appelez la fonction addUser pour créer un nouvel utilisateur
  //     // const createdUser = await addUser(newUser);
  //     // console.log("Nouvel utilisateur créé :", createdUser);

  //     // toast.success("Enregistrement réussi !", {
  //     //   position: toast.POSITION.TOP_CENTER,
  //     //   autoClose: 3000, // Durée d'affichage de la notification en millisecondes
  //     // });

  //     // Réinitialisez les valeurs du formulaire après la création réussie
  //     setNom("");
  //     setPrenom("");
  //     setEmail("");
  //     setProfil("");
  //     setStatut(false);
  //     setTel("");
  //     setAdresse("");
  //     setCNI("");
  //     setCodeZip("");
  //     setDateEmission("");
  //     setDateExpiration("");
  //     setDateNaissance("");
  //     setEmail("");
  //     setAttachement(undefined);

  //     // ... réinitialisez les autres champs du formulaire ici
  //   } catch (error: any) {
  //     console.error(
  //       "Erreur lors de la création de l'utilisateur :",
  //       error.message
  //     );
  //     // toast.error("Erreur lors de l'enregistrement", {
  //     //   position: toast.POSITION.TOP_CENTER,
  //     //   autoClose: 3000,
  //     // });
  //   }
  // };
  // const fileInputRef = useRef<HTMLInputElement>(null);

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   setSelectedFile(file);
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   // Check if passwords match
  //   if (password !== newPassword) {
  //     setPasswordsMatch(false);
  //     return; // Abort form submission
  //   }

  //   // Handle form submission with valid passwords
  //   setPasswordsMatch(true);
  //   // ... Your form submission logic here ...
  // };

  return (
    <div></div>
    // <>
    //   <div className="row row-cols-2" style={{ marginTop: "8px" }}>
    //     <div className="col-10 gest_profil">
    //       <span>Gestion des profils</span>
    //     </div>
    //     <div className="col-2 btn-add">
    //       <span>
    //         <label htmlFor="">Nouveau utilisateur</label>{" "}
    //         <AiOutlinePlus size={18} color="#FFFFFF" />
    //       </span>
    //     </div>
    //   </div>

    //   <div className="row row-cols-2">
    //     <div
    //       className="col-9"
    //       style={{ background: "#F8F8F8", borderRadius: "25px" }}
    //     >
    //       {/* <ToastContainer /> */}
    //       <form onSubmit={handleCreateUser}>
    //         <p className="mon-para">Ajouter un administrateur</p>
    //         <div className="div-add">
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end">
    //               <hr className="left-line" />
    //             </div>
    //             <div className="col-8 d-flex align-items-center">
    //               <label
    //                 htmlFor=""
    //                 className="myText"
    //                 style={{ marginRight: "10px" }}
    //               >
    //                 Champs obligatoires
    //               </label>
    //               <hr className="line-right" />
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end">Adresse Email</div>
    //             <div className="col-8">
    //               <input
    //                 type="text"
    //                 id="email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 className="myInput"
    //                 name="email"
    //                 placeholder="Ex : mountagha.tmn@gmail.com"
    //               />
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end">Mot de passe</div>
    //             <div className="col-8">
    //               <div className="password-input-container">
    //                 <input
    //                   className="myInput password-input"
    //                   type={showPassword ? "text" : "password"}
    //                   name="password"
    //                   value={password}
    //                   onChange={handleChange}
    //                 />
    //                 <div
    //                   className="password-toggle-icon"
    //                   onClick={() =>
    //                     setShowPassword((prevShowPassword) => !prevShowPassword)
    //                   }
    //                 >
    //                   {showPassword ? (
    //                     <AiOutlineEyeInvisible />
    //                   ) : (
    //                     <AiOutlineEye />
    //                   )}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">
    //               Confirmation mot de passe
    //             </div>
    //             <div className="col-8">
    //               <div className="password-input-container">
    //                 <input
    //                   className="myInput password-input"
    //                   type={showNewPassword ? "text" : "password"}
    //                   name="newPassword"
    //                   value={newPassword}
    //                   onChange={(e) => setNewPassword(e.target.value)}
    //                 />
    //                 <div
    //                   className="password-toggle-icon"
    //                   onClick={() =>
    //                     setShowNewPassword(
    //                       (prevShowPassword) => !prevShowPassword
    //                     )
    //                   }
    //                 >
    //                   {showNewPassword ? (
    //                     <AiOutlineEyeInvisible />
    //                   ) : (
    //                     <AiOutlineEye />
    //                   )}
    //                 </div>
    //               </div>
    //               {!passwordsMatch && (
    //                 <p style={{ color: "red" }}>
    //                   Les mots de passe ne correspondent pas.
    //                 </p>
    //               )}
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">Rôle</div>
    //             <div className="col-8">
    //               <select
    //                 className="myInput"
    //                 name="profil"
    //                 value={profil}
    //                 onChange={(e) => setProfil(e.target.value)}
    //               >
    //                 <option value="">Sélectionner un rôle</option>
    //                 {profils.map((profil) => (
    //                   <option key={profil.id} value={profil.id}>
    //                     {profil.intitule}
    //                   </option>
    //                 ))}
    //               </select>
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">Nom</div>
    //             <div className="col-8">
    //               <input
    //                 className="myInput"
    //                 type="text"
    //                 name="nom"
    //                 placeholder="Ex : Niang"
    //                 id="nom"
    //                 value={nom}
    //                 onChange={(e) => setNom(e.target.value)}
    //               />
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">Prénom</div>
    //             <div className="col-8">
    //               <input
    //                 className="myInput"
    //                 type="text"
    //                 name="email"
    //                 placeholder="Ex : Mountagha"
    //                 id="prenom"
    //                 value={prenom}
    //                 onChange={(e) => setPrenom(e.target.value)}
    //               />
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">
    //               Téléphone <i className="text-red">(facultatif)</i>
    //             </div>
    //             <div className="col-8">
    //               <input
    //                 className="myInput"
    //                 type="text"
    //                 name="tel"
    //                 placeholder="Ex: +221782551078"
    //                 id="tel"
    //                 value={tel}
    //                 onChange={(e) => setTel(e.target.value)}
    //               />
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end">
    //               <hr className="left-line" />
    //             </div>
    //             <div className="col-8 d-flex align-items-center">
    //               <label htmlFor="" className="myText">
    //                 Champs complémentaires
    //               </label>
    //               <hr className="line-right-1" />
    //             </div>
    //           </div>
    //           <div className="photo-div">
    //             <div className="myName" style={{ marginLeft: "150px" }}>
    //               Photo de profil
    //             </div>
    //             <hr className="hr-photo" id="custom-hr" />
    //             <div
    //               className="ma-photo-div d-flex justify-content-center align-items-center"
    //               onClick={() => fileInputRef.current?.click()}
    //               style={{ cursor: "pointer" }}
    //             >
    //               <label htmlFor="" style={{ fontSize: "8px" }}>
    //                 {selectedFile
    //                   ? `Image uploadée : ${selectedFile.name}`
    //                   : "Upload photo"}
    //               </label>
    //             </div>
    //             {/* Élément input masqué pour sélectionner le fichier */}
    //             <input
    //               ref={fileInputRef}
    //               type="file"
    //               value={attachement}
    //               style={{ display: "none" }}
    //               accept="image/*"
    //               onChange={(e) => {
    //                 const file = e.target.files?.[0];
    //                 setSelectedFile(file);
    //               }}
    //             />
    //           </div>

    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">Numéro de CNI</div>
    //             <div className="col-8">
    //               <input
    //                 className="myInput"
    //                 type="text"
    //                 name="CNI"
    //                 placeholder="Ex : 1311199700016"
    //                 id="CNI"
    //                 value={CNI}
    //                 onChange={(e) => setCNI(e.target.value)}
    //               />
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">Genre</div>
    //             <div className="col-8">
    //               <span style={{ marginRight: "10px" }}>
    //                 <input
    //                   type="radio"
    //                   name="genre"
    //                   value="masculin"
    //                   style={{ marginRight: "10px" }}
    //                   id="genre"
    //                   onChange={(e) => setPassword(e.target.value)}
    //                 />
    //                 <label htmlFor="">Masculin</label>{" "}
    //               </span>
    //               <span style={{ marginRight: "10px" }}>
    //                 <input
    //                   type="radio"
    //                   name="genre"
    //                   value="féminin"
    //                   style={{ marginRight: "10px" }}
    //                   id="genre"
    //                   onChange={(e) => setPassword(e.target.value)}
    //                 />
    //                 <label htmlFor="">Féminin</label>
    //               </span>
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">Date de naissance</div>
    //             <div className="col-8">
    //               <input
    //                 className="myInput"
    //                 type="text"
    //                 name="dateNaissance"
    //                 placeholder="Ex : 03-01-1997"
    //                 id="dateNaissance"
    //                 onChange={(e) => setDateNaissance(e.target.value)}
    //               />
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">Lieu de naissance</div>
    //             <div className="col-8">
    //               <input
    //                 className="myInput"
    //                 type="text"
    //                 name="lieuNaissance"
    //                 placeholder="Ex : Parcelles assainies"
    //                 id="lieuNaissance"
    //                 value={lieuNaissance}
    //                 onChange={(e) => setlieuNaissance(e.target.value)}
    //               />
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">Code zip</div>
    //             <div className="col-8">
    //               <input
    //                 className="myInput"
    //                 type="text"
    //                 name="codeZip"
    //                 placeholder="Ex : 1200"
    //                 id="codeZip"
    //                 value={codeZip}
    //                 onChange={(e) => setCodeZip(e.target.value)}
    //               />
    //             </div>
    //           </div>
    //           <div className="row row-cols-2 ligne-group">
    //             <div className="col-4 myName text-end ">Statut utilisateur</div>
    //             <div className="col-8 d-flex align-items-center">
    //               <div className="toggle-icon" onClick={handleToggleChange}>
    //                 {isActive ? (
    //                   <>
    //                     <MdToggleOn size={40} color="red" />
    //                     <span className="toggle-text">Activer</span>
    //                   </>
    //                 ) : (
    //                   <>
    //                     <MdToggleOff size={40} color="green" />
    //                     <span className="toggle-text">Désactiver</span>
    //                   </>
    //                 )}
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="row" style={{ marginTop: "20px" }}>
    //           <div className="col-12 div-btns d-flex justify-content-end">
    //             <button
    //               className="btn btn-success btn-add-1"
    //               // onClick={handleCreateUser}
    //               type="submit"
    //             >
    //               Nouveau profil <AiOutlinePlus size={18} color="#FFFFFF" />
    //             </button>
    //             <button className="btn button-annuler d-flex justify-content-center align-items-center">
    //               Annuler
    //             </button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>

    //     <div
    //       className="col-3 "
    //       style={{
    //         paddingLeft: "60px",
    //         paddingTop: "40px",
    //         boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.07)",
    //         borderRadius: "16px",
    //         marginTop: "20px",
    //       }}
    //     >
    //       <div className="div-search">
    //         <BiSearchAlt2 size={20} />
    //         <label htmlFor="">rechercher</label>
    //       </div>
    //       <div className="list-profils">
    //         {firstTenUsers.map((user) => {
    //           // Extract the first letters of nom and prenom
    //           const nomInitial = user.nom.charAt(0).toUpperCase();
    //           const prenomInitial = user.prenom.charAt(0).toUpperCase();

    //           // Generate a random color for the circle background
    //           const circleColor = getRandomColor();

    //           return (
    //             <div key={user.id} className="user-item">
    //               <div
    //                 className="profile-circle"
    //                 style={{ background: circleColor }}
    //               >
    //                 {nomInitial}
    //                 {prenomInitial}
    //               </div>
    //               <span className="full-name">
    //                 {user.nom} {user.prenom}
    //               </span>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default NewUser;
