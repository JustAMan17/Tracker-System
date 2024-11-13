// Simulate adding functionality to dynamically load logs for the selected date
document.addEventListener("DOMContentLoaded", function () {
    const dates = document.querySelectorAll("td");
    const logEntries = document.getElementById("log-entries");
  
    dates.forEach(date => {
      date.addEventListener("click", function () {
        const selectedDate = this.innerText;
        logEntries.innerHTML = `
          <li>RFID Tag: 123456789 | IN at 08:00 AM | OUT at 05:00 PM on ${selectedDate}</li>
        `;
      });
    });
  });
  