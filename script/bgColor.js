const colors = [
  "bg-gray-800",
  "bg-gray-700",
  "bg-blue-800",
  "bg-green-700",
  "bg-indigo-800",
  "bg-purple-700",
  "bg-teal-800",
  "bg-orange-800",
  "bg-red-800",
  "bg-yellow-700",
];

document.getElementById("change-bg-btn").addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById("bodyColor").classList.add(`${randomColor}`);
  document.getElementById("mainContent").classList.add(`${randomColor}`);
});
