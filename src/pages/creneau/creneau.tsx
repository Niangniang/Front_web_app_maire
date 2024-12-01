import { useState, useCallback, useMemo } from "react";
// import PropTypes from "prop-types";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dateFnsLocalizer, Views, Event } from "react-big-calendar";
import events from "../../utils/events";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import fr from "date-fns/locale/fr";
import { useLoaderData } from "react-router-dom";
import { CreneauType } from "../../types/creneau";
import ShowCreneauPopup from "../../components/showCreneauPopup/showCreneauPopup";
import { Form } from "react-bootstrap";
import { AskedPersonType } from "../../types/askedPerson";
import { getCreneaux } from "../../services/creneauService";
import { getAllAskedPersons } from "../../services/askedPersonServices";
import AddCreneauPopup from "../../components/addCreneauPopup/addCreneauPopup";

const locales = {
  fr: fr,
};
export interface FormatedCreneau {
  id: `${string}-${string}-${string}-${string}-${string}`;
  start: Date;
  end: Date;
  disponibilite: boolean;
  date: Date;
  personneDemande: {
    id: `${string}-${string}-${string}-${string}-${string}`;
    prenom: string;
    nom: string;
    nomPoste: string;
    mail: string;
    fileUrl?: File | null;
  };
}
[];

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export function Creneau() {
  //the loader of the data
  const { creneaux, askedPersons } = useLoaderData() as CreneauLoaderProps;
  console.log(
    "🚀 ~ file: creneau.tsx:49 ~ Creneau ~ askedPersons:",
    askedPersons
  );
  console.log("🚀 ~ file: creneau.tsx:35 ~ Creneau ~ demandes:", creneaux);

  //the asked person
  const [selectedPerson, setSelectedPerson] = useState<string>(
    askedPersons[0].id
  );
  //we filter the events by selectedPerson
  const filteredCreneaux = creneaux.filter(
    (c) => c.personneDemande.id === selectedPerson
  );
  //we format the datas so that we can display it on the calendar
  const formatedCreneaux: FormatedCreneau[] = filteredCreneaux.map((cr) => ({
    id: cr.id,
    start: new Date(cr.debut),
    end: new Date(cr.fin),
    disponibilite: cr.disponibilite,
    date: new Date(cr.date),
    personneDemande: cr.personneDemande,
  }));
  console.log(
    "🚀 ~ file: creneau.tsx:43 ~ formatedCreneaux ~ formatedCreneaux:",
    formatedCreneaux
  );

  //the variables and function that control the show popup
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // the variables that control the add popup
  const [showAddPopup, setShowAddPopup] = useState(false);

  const handleCloseAddPopup = () => setShowAddPopup(false);
  const handleShowAddPopup = () => setShowAddPopup(true);

  // the selectedCreneau
  const [selectedCreneau, setSelectedCreneau] = useState<FormatedCreneau>(
    formatedCreneaux[0]
  );

  const messages = {
    allDay: "Tous les jours",
    previous: "Précédent",
    next: "Suivant",
    today: "Aujourd'hui",
    month: "Mois",
    week: "Semaine",
    day: "Jour",
    agenda: "Agenda",
    date: "Date",
    time: "Heure",
    event: "Evenement",
  };

  // new selected slot(creneau)
  const [newSlotStart, setNewSlotStart] = useState<Date>(
    new Date("2023-08-14T16:30:00")
  );
  const [newSlotEnd, setNewSlotEnd] = useState<Date>(
    new Date("2023-08-14T17:00:00")
  );
  const handleSelectSlot = useCallback(
    ({ start, end }: { start: Date; end: Date }) => {
      setNewSlotStart(start);
      setNewSlotEnd(end);
      handleShowAddPopup();
    },
    [setNewSlotStart, setNewSlotEnd, selectedPerson]
  );

  const handleSelectEvent = useCallback((event: FormatedCreneau) => {
    setSelectedCreneau(event);
    handleShow();
  }, []);

  // const { defaultDate, scrollToTime } = useMemo(
  //   () => ({
  //     defaultDate: new Date(2015, 3, 12),
  //     scrollToTime: new Date(1970, 1, 1, 6),
  //   }),
  //   []
  // );
  return (
    <section>
      <AddCreneauPopup
        showAddPopup={showAddPopup}
        handleCloseAddPopup={handleCloseAddPopup}
        newSlotStart={newSlotStart}
        newSlotEnd={newSlotEnd}
        selectedPerson={
          askedPersons.filter((ap) => ap.id === selectedPerson)[0]
        }
      />
      <ShowCreneauPopup
        show={show}
        handleClose={handleClose}
        selectedCreneau={selectedCreneau}
      />
      <header style={{ display: "flex", justifyContent: "end" }}>
        <Form.Select
          value={selectedPerson}
          onChange={(e) => setSelectedPerson(e.target.value)}
          aria-label="Default select example"
          style={{ marginBottom: "2px", width: "250px" }}
        >
          {/* <option>PersonneDemandé</option> */}
          {askedPersons.map((ap) => (
            <option
              key={ap.id}
              value={ap.id}
            >{`${ap.prenom} ${ap.nom}`}</option>
          ))}
        </Form.Select>
      </header>
      <Calendar
        // defaultDate={defaultDate}
        defaultView={Views.WEEK}
        events={formatedCreneaux}
        localizer={localizer}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        culture="fr"
        selectable
        messages={messages}
        // scrollToTime={scrollToTime}
        style={{ height: "600px" }}
      />
    </section>
  );
}

export type CreneauLoaderProps = {
  creneaux: CreneauType[];
  askedPersons: AskedPersonType[];
};
export const creneauLoader = async (): Promise<CreneauLoaderProps> => {
  const creneaux = await getCreneaux();
  const askedPersons = await getAllAskedPersons();
  return {
    creneaux,
    askedPersons,
  };
};
