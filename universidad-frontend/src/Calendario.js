import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendario.css';

function Calendario() {
  const [value, setValue] = useState(new Date(2025, 7, 24)); // 24 de agosto 2025

  return (
    <div className="Calendario">
      <Calendar
        onChange={setValue}
        value={value}
        locale="es-ES"
        formatShortWeekday={(locale, date) => {
          const day = date.getDay();
          return ['D', 'L', 'M', 'X', 'J', 'V', 'S'][day];
        }}
        tileClassName={({ date, view }) =>
          view === 'month' &&
          date.getDate() === 24 &&
          date.getMonth() === 7 &&
          date.getFullYear() === 2025
            ? 'highlight'
            : null
        }
      />
    </div>
  );
}

export default Calendario;