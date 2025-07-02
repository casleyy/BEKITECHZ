// pie chart dashboard
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const pieData = [
    { label: "Food", value: 300, color: "#81a969" },
    { label: "Transport", value: 150, color: "#fbc02d" },
    { label: "Utilities", value: 200, color: "#388e3c" },
    { label: "Entertainment", value: 100, color: "#d32f2f" },
    { label: "Others", value: 250, color: "#cfe8ff" }
  ];

  const svg = document.querySelector(".custom-pie-chart");
  const tooltip = document.getElementById("tooltip");
  if (!svg) return;

  const total = pieData.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercent = 0;

  pieData.forEach(item => {
    const startPercent = cumulativePercent;
    const slicePercent = item.value / total;
    cumulativePercent += slicePercent;

    const [startX, startY] = getCoordinatesForPercent(startPercent);
    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
    const largeArcFlag = slicePercent > 0.5 ? 1 : 0;

    const pathData = [
      `M 20 20`,
      `L ${startX} ${startY}`,
      `A 20 20 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      `Z`
    ].join(" ");

    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    path.setAttribute("d", pathData);
    path.setAttribute("fill", item.color);
    path.style.transition = "transform 0.3s ease, fill 0.3s ease";

    // Tooltip + hover movement
    group.addEventListener("mouseover", (e) => {
      path.style.fill = "#8B0000"; // Dark red on hover

      const radians = 2 * Math.PI * (startPercent + slicePercent / 2);
      const dx = Math.cos(radians) * 2.5;
      const dy = Math.sin(radians) * 2.5;
      group.setAttribute("transform", `translate(${dx}, ${dy})`);

      tooltip.style.display = "block";
      tooltip.innerText = `${item.label}: $${item.value} (${(slicePercent * 100).toFixed(1)}%)`;
    });

    group.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY + 10 + "px";
    });

    group.addEventListener("mouseout", () => {
      path.style.fill = item.color;
      group.removeAttribute("transform");
      tooltip.style.display = "none";
    });

    group.appendChild(path);
    svg.appendChild(group);
  });

  function getCoordinatesForPercent(percent) {
    const radius = 20;
    const x = Math.cos(2 * Math.PI * percent) * radius + 20;
    const y = Math.sin(2 * Math.PI * percent) * radius + 20;
    return [x, y];
  }
});
