interface NewFeedbackType {
  demande: {
    id: UUID;
  };
  expediteur: UUID;
  destinataire: UUID;
  objet: string;
  contenu: string;
}

interface AddFeedBackResponseType {
  feedbackResponseDtos: {
    id: UUID;

    date_envoie: string;

    isRead: boolean;

    demande: {
      id: UUID;

      date: string;

      message: string;

      nom_beneficiaire: string;

      prenom_beneficiaire: string;

      adressse: string;

      tel: string;

      status: "Traitement" | "Traitee" | "Attente" | "Annuler";
      fileUrls: string[];

      typeDemande: {
        id: UUID;
        nom: string;
        nomsFichiersRequis: string[];
      };

      utilisateur: null;

      enfant: null;

      traitant: null;

      nbrExemplaire: number;
    };

    user_expediteur: {
      id: UUID;

      nom: string;

      prenom: string;

      email: string;

      profil: {
        id: UUID;

        intitule: string;
      };

      statut: boolean;

      tel: string;

      adresse: string;

      codeZip: string;

      dateNaissance: string;

      lieuNaissance: string;

      nationalite: string;

      dateExpiration: string;

      dateEmission: string;

      lieuEmission: string;

      cni: string;

      _active: boolean;

      _admin: boolean;
    };

    user_destinataire: {
      id: UUID;

      nom: string;

      prenom: string;

      email: string;

      profil: {
        id: UUID;
        intitule: string;
      };

      statut: boolean;

      tel: string;

      adresse: string;

      codeZip: string;

      dateNaissance: string;

      lieuNaissance: string;

      nationalite: string;

      dateExpiration: string;

      dateEmission: string;

      lieuEmission: string;

      cni: string;

      _active: boolean;

      _admin: boolean;
    };

    objet: string;

    contenu: string;
  };

  Message: string;
}
