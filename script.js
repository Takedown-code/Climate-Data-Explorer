// Get canvas context for Chart.js
const ctx = document.getElementById('climateChart').getContext('2d');

// Simulated climate data for different metrics and time ranges
const dataSets = {
  temperature: {
    '2000s': [14.1, 14.3, 14.4, 14.6, 14.7],
    '1990s': [13.8, 13.9, 14.0, 14.1, 14.2],
    '1980s': [13.5, 13.6, 13.7, 13.8, 13.9],
  },
  sea: {
    '2000s': [10, 20, 30, 40, 50],
    '1990s': [5, 10, 15, 20, 25],
    '1980s': [2, 4, 6, 8, 10],
  },
  co2: {
    '2000s': [370, 380, 390, 400, 410],
    '1990s': [350, 355, 360, 365, 370],
    '1980s': [330, 335, 340, 345, 350],
  },
};

// X-axis labels (years)
const labels = ['2000', '2005', '2010', '2015', '2020'];

// Create initial chart with default data (temperature in 2000s)
let chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: 'Temperature (°C)',
      data: dataSets.temperature['2000s'],
      borderWidth: 2,
      borderColor: '#0077b6',
      fill: false,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
    }
  }
});

// Attach event listeners to both dropdowns
document.getElementById('metric').addEventListener('change', updateChart);
document.getElementById('year').addEventListener('change', updateChart);

// Update chart when a user changes metric or year
function updateChart() {
  const metric = document.getElementById('metric').value;
  const year = document.getElementById('year').value;

  chart.data.datasets[0].data = dataSets[metric][year];
  chart.data.datasets[0].label = {
    temperature: 'Temperature (°C)',
    sea: 'Sea Level (mm)',
    co2: 'CO₂ Levels (ppm)'
  }[metric];

  chart.update(); // Re-render the chart with new data
}
