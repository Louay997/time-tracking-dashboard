// Function to fetch and use the JSON data
async function loadData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    // Function to update the UI based on the selected timeframe
    function updateUI(timeframe) {
      data.forEach(item => {
        const container = document.querySelector(`.${item.title.toLowerCase().replace(' ', '')}`);
        if (container) {
          const h4 = container.querySelector('h4');
          const h2 = container.querySelector('h2');
          const p = container.querySelector('p');

          h4.textContent = item.title;
          h2.textContent = `${item.timeframes[timeframe].current}hrs`;
          p.textContent = `Previous - ${item.timeframes[timeframe].previous}hrs`;
        }
      });
    }

    // Add event listeners to the buttons
    document.getElementById('daily_button').addEventListener('click', () => updateUI('daily'));
    document.getElementById('weekly_button').addEventListener('click', () => updateUI('weekly'));
    document.getElementById('monthly_button').addEventListener('click', () => updateUI('monthly'));

    // Initialize with daily data
    updateUI('daily');
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
}

// Call the function to load the data
loadData();