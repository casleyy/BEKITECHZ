function openNav() {
    document.getElementById("site_sidenav").style.width = "275px";
}

function closeNav() {
    document.getElementById("site_sidenav").style.width = "0";
}

// pie chart 

// line chart
const lineChart = new Chart("line-chart", {
  type: "line",
  data: {},
  options: {}
});

// bar chart
let barLabels = ['Bills', 'Food', 'School', 'Rent', 'Wants'];
let barData = [5500, 3000, 1000, 3500, 2500];

const barChartData = {
  labels: barLabels,
  datasets: [{
    label: 'Expenses',
    data: barData,
    backgroundColor: 'rgba(255, 162, 0, 1)',
    textColor: 'rgb(255,255,255)',
    borderColor: 'rgb(255, 162, 0)',
    borderWidth: 1
  }]
};

const barCanvas = document.getElementById('bar-chart');
if (barCanvas) {
  new Chart(barCanvas, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend:{
          display: false
        }
      }
    }
  });
} else {
  console.error("Canvas with ID 'bar-chart' not found.");
}
