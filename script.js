function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
console.log(getDaysInMonth(2025, 1));
console.log(getDaysInMonth(2024, 1));
console.log(getDaysInMonth(2025, 0));
console.log(getDaysInMonth(2025, 11));

async function getTasks(){
    const response = await fetch('db.json'); // Fetch the file
    try {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse JSON
      console.log(data);
  
      // Access specific data
      data.tasks.forEach(task => {
        console.log(`Task: ${task.name}`);
        console.log(`Assigned to: ${task.assigned}`);
      });
  
      return data; // Return the data for further use
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
}
getTasks();
  