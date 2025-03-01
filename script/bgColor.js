const colors = [
  "bg-gray-800",
  "bg-gray-700",
  "bg-blue-400",
  "bg-green-700",
  "bg-indigo-800",
  "bg-purple-700",
  "bg-teal-800",
  "bg-slate-500",
  "bg-red-900",
  "bg-yellow-700",
  "bg-orange-300",
];

document.getElementById("change-bg-btn").addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById("bodyColor").classList.add(`${randomColor}`);
  document.getElementById("mainContent").classList.add(`${randomColor}`);
});
