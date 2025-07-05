function openNav() {
    document.getElementById("site-sidenav").style.width = "275px";
}

function closeNav() {
    document.getElementById("site-sidenav").style.width = "0";
}

Chart.defaults.borderColor = '#2a4c09';
Chart.defaults.color = '#2a4c09';

// bar chart
let barLabels = ["Food", "Utilities", "Transport", "Entertainment", "Others"];
let barData = [550, 300, 130, 340, 260];

const barChartData = {
  labels: barLabels,
  datasets: [{
    data: barData,
    backgroundColor: "#2196f3"
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

// line chart
let lineLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let lineData1 =  [15500, 14238, 16420, 15507, 16839, 10194, 11983, 16025, 11377, 12744, 13862, 17000];
let lineData2 =  [20000, 19000, 20500, 18500, 21500, 19900, 20000, 16300, 14200, 24300, 23000, 25000];

const lineChartData = {
  labels: lineLabels,
  datasets: [{
    data: lineData1,
    backgroundColor: "rgba(0, 173, 253, 0.6)",
    borderColor: "#2196f3",
    fill: true,
    tension: 0.1,
    hoverBorderColor: 'red'
  },
  {
    data: lineData2,
    backgroundColor: "rgba(253, 202, 0, 0.6)",
    borderColor: "#fbc02d",
    fill: true,
    tension: 0.1,
    hoverBorderColor: 'red'
  }]
};

const lineCanvas = document.getElementById('line-chart');
if (lineCanvas) {
  new Chart(lineCanvas, {
    type: 'line',
    data: lineChartData,
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
  console.error("Canvas with ID 'line-chart' not found.");
}

// pie chart
let pieLabels = ["Food", "Utilities", "Transport", "Entertainment", "Others"];
let pieData =  [300, 150, 200, 100, 250];

const pieChartData = {
  labels: pieLabels,
  datasets: [{
    data: pieData,
    borderColor: '#2a4c09',
    backgroundColor: ["#81a969", "#fbc02d", "#388e3c", "#d32f2f", "#cfe8ff"]
  }]
};

const pieCanvas = document.getElementById('pie-chart');
if (pieCanvas) {
  new Chart(pieCanvas, {
    type: 'pie',
    data: pieChartData,
    options: {
      plugins: {
        legend:{
          display: false
        }
      }
    }
  });


} else {
  console.error("Canvas with ID 'pie-chart' not found.");
}
