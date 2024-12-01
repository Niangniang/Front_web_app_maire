import "./calendrier.css";
import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

interface CalendarProps {
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth + 1);
  };

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const renderCalendar = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();

    const calendar: Date[][] = [[]];
    let weekIndex = 0;

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const dayOfWeek = date.getDay();

      if (dayOfWeek === 0 && day !== 1) {
        weekIndex++;
        calendar[weekIndex] = [];
      }

      calendar[weekIndex].push(date);
    }

    const formattedDate = firstDay.toLocaleString("fr-FR", {
      month: "long",
      year: "numeric",
    });

    return (
      <>
        <span
          style={{ marginTop: "20px", padding: "10px", fontWeight: "bold" }}
        >
          calendrier
        </span>
        <div
          className="calendar-header"
          style={{
            justifyContent: "space-between",
            gap: "20px",
            display: "flex",
            marginTop: "10px",
          }}
        >
          <span className="prev-month" onClick={handlePrevMonth}>
            <BiChevronLeft size={24} />
          </span>
          <h4>{formattedDate}</h4>
          <span className="next-month" onClick={handleNextMonth}>
            <BiChevronRight size={24} />
          </span>
        </div>
        <table
          style={{
            width: "280px",
            height: "250px",
            marginBottom: "16px",
            marginLeft: "2px",
          }}
        >
          <thead>
            <tr>
              <th className="custume-th">Dim</th>
              <th className="custume-th">Lun</th>
              <th className="custume-th">Mar</th>
              <th className="custume-th">Mer</th>
              <th className="custume-th">Jeu</th>
              <th className="custume-th">Ven</th>
              <th className="custume-th">Sam</th>
            </tr>
          </thead>
          <tbody>
            {calendar.map((week, index) => (
              <tr key={index}>
                {week.map((date, index) => (
                  <td
                    key={index}
                    onClick={() => handleDateClick(date)}
                    className={selectedDate === date ? "selected" : ""}
                  >
                    {date.getDate()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return <div className="calendar">{renderCalendar()}</div>;
};

export default Calendar;
