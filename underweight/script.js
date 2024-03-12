document.addEventListener("DOMContentLoaded", function() {
  const currentDayDisplay = document.getElementById("currentDay");
  const taskList = document.getElementById("taskList");
  const totalPointsDisplay = document.getElementById("totalPoints");
  let totalPoints = 0;

  // Function to display the current day
  function displayCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayOfWeek = days[today.getDay()];
    currentDayDisplay.textContent = "Today is " + dayOfWeek;
  }

  // Function to handle checkbox change event
  function handleCheckboxChange(event) {
    const checkbox = event.target;
    const points = parseInt(checkbox.getAttribute("data-points"));
    if (!isNaN(points)) {
      if (checkbox.checked) {
        totalPoints += points;
      } else {
        totalPoints -= points;
      }
      totalPointsDisplay.textContent = "Total Points: " + totalPoints;
    }
  }

  // Initialize task checklist
  displayCurrentDay();
  taskList.addEventListener("change", handleCheckboxChange);
});
