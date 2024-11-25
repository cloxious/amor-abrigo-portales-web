// src/pages/calendar.js

let currentDate = new Date();

document.addEventListener('DOMContentLoaded', () => {
  const calendarDiv = document.getElementById('calendar');
  const prevMonthButton = document.getElementById('prev-month');
  const nextMonthButton = document.getElementById('next-month');

  // Función para generar el calendario
  function generateCalendar(date) {
    const today = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    calendarDiv.innerHTML = `
      <h2>${month} ${year}</h2>
      <table border="1" style="width: 100%; text-align: center;">
        <thead>
          <tr>
            <th>Lun</th>
            <th>Mar</th>
            <th>Mié</th>
            <th>Jue</th>
            <th>Vie</th>
            <th>Sáb</th>
            <th>Dom</th>
          </tr>
        </thead>
        <tbody id="calendar-body">
          <!-- Días se generan aquí -->
        </tbody>
      </table>
    `;

    const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
    const firstDay = new Date(year, date.getMonth(), 1).getDay();
    const tbody = document.getElementById('calendar-body');

    let row = '<tr>';
    const firstDayIndex = (firstDay === 0 ? 7 : firstDay); // Ajustar domingo (0) al final
    for (let i = 1; i < firstDayIndex; i++) {
      row += '<td></td>';
    }
    for (let day = 1; day <= daysInMonth; day++) {
      if ((firstDayIndex + day - 2) % 7 === 0 && day !== 1) {
        row += '</tr><tr>';
      }
      const isToday = 
        day === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      row += `<td style="${isToday ? 'background-color: #FFD700;' : ''}">${day}</td>`;
    }
    row += '</tr>';
    tbody.innerHTML = row;
  }

  // Generar el calendario inicial
  generateCalendar(currentDate);

  // Manejar la navegación
  prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
  });

  nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
  });
});
