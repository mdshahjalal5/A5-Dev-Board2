const datas = [
  {
    company: "ShopEase",
    task: "Fix Mobile Button Issue",
    description: "Debug using Chrome DevTools, check for overlappi...",
    deadline: "21 March 2025",
    status: "Completed",
  },
  {
    company: "DevSolutions",
    task: "Upgrade Node.js Version",
    description:
      "Update Node.js to latest stable version, test compatibility...",
    deadline: "20 April 2025",
    status: "Pending",
  },
  {
    company: "ByteWorks",
    task: "Refactor Frontend Code",
    description:
      "Optimize components, remove unused code, improve structure...",
    deadline: "25 March 2025",
    status: "In Progress",
  },
  {
    company: "AppMasters",
    task: "Fix API Authentication Bug",
    description: "Debug the authentication flow, fix token validation...",
    deadline: "28 March 2025",
    status: "Completed",
  },
  {
    company: "PixelCraft",
    task: "Design Landing Page",
    description: "Create wireframes, implement responsive design...",
    deadline: "18 April 2025",
    status: "In Review",
  },
  {
    company: "CodeSquad",
    task: "Implement User Profile Page",
    description: "Develop a user profile page with dynamic data fetching...",
    deadline: "1 April 2025",
    status: "Pending",
  },
  {
    company: "WebFusion",
    task: "Set Up Continuous Integration Pipeline",
    description:
      "Integrate GitHub Actions, configure automated tests and deployments...",
    deadline: "3 April 2025",
    status: "In Progress",
  },
  {
    company: "CloudWave",
    task: "Migrate App to AWS",
    description:
      "Set up EC2 instances, migrate databases, configure security groups...",
    deadline: "15 April 2025",
    status: "In Progress",
  },
  {
    company: "DevXperts",
    task: "Fix Broken Links on Website",
    description: "Identify and replace broken internal and external links...",
    deadline: "7 April 2025",
    status: "Completed",
  },
  {
    company: "TechVision",
    task: "Update Dependencies",
    description:
      "Update all outdated dependencies, resolve potential conflicts...",
    deadline: "12 April 2025",
    status: "Pending",
  },
  {
    company: "DesignHub",
    task: "Improve User Onboarding Flow",
    description: "Revamp onboarding process, simplify UI/UX for new users...",
    deadline: "20 March 2025",
    status: "In Review",
  },
  {
    company: "CloudSync",
    task: "Add Dark Mode",
    description:
      "Store the user's preference in localStorage, update CSS vari...",
    deadline: "21 March 2025",
    status: "Completed",
  },
  {
    company: "SwiftPay",
    task: "Optimize Home page",
    description: "Debug using Chrome DevTools, check for overlappi...",
    deadline: "21 March 2025",
    status: "Completed",
  },
  {
    company: "Meta",
    task: "Add new emoji 🙌🙌",
    description: "Debug using Chrome DevTools, check for overlappi...",
    deadline: "21 March 2025",
    status: "Completed",
  },
  {
    company: "Google LLC",
    task: "Integrate OpenAI API",
    description: "Debug using Chrome DevTools, check for overlappi...",
    deadline: "21 March 2025",
    status: "Completed",
  },
  {
    company: "Glassdoar",
    task: "Improve Job searching",
    description: "Debug using Chrome DevTools, check for overlappi...",
    deadline: "21 March 2025",
    status: "Completed",
  },
  {
    company: "TechFlow",
    task: "Optimize API Response Time",
    description: "Analyze server logs, implement caching strategies...",
    deadline: "5 April 2025",
    status: "In Progress",
  },
  {
    company: "WebNest",
    task: "Fix Navbar Alignment Issue",
    description: "Adjust CSS flex properties, test responsiveness...",
    deadline: "15 March 2025",
    status: "Pending",
  },
  {
    company: "CodeCrafters",
    task: "Implement Dark Mode",
    description: "Modify Tailwind config, add theme switcher...",
    deadline: "10 April 2025",
    status: "Completed",
  },
  {
    company: "DesignSphere",
    task: "Enhance UI Accessibility",
    description:
      "Improve contrast, add ARIA labels, test with screen reader...",
    deadline: "30 March 2025",
    status: "In Review",
  },
  {
    company: "CloudSync",
    task: "Migrate Database to PostgreSQL",
    description: "Export existing data, configure new DB schema...",
    deadline: "12 April 2025",
    status: "In Progress",
  },
];

let index = 0;
for (const data of datas) {
  index++;
  const div = document.createElement("div");
  div.classList.add("my-3");
  div.innerHTML = `
 <div class=" w-full max-w-sm bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg border border-gray-200 shadow-md">
    <div class="p-5">
      <h5 class="mb-2 text-sm font-semibold tracking-tight bg-white text-gray-700 inline-block p-1 px-2 rounded">
       ${data.company}
      </h5>
      <p class="mb-3 text-lg font-bold tracking-tight text-gray-900">
       ${data.task}
      </p>
      <p class="mb-3 font-normal text-gray-700 bg-white rounded py-3 px-3 p">
       ${data.description}
      </p>
      <p class="border-b border border-gray-500 border-dotted mt-2"></p>
      <div class="flex justify-between items-center mt-4">
       <span class="text-xs text-gray-500">Deadline:<br />${data.deadline}</span>
        <span 
         id="status-btn-${index}"  class="status-btn text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded btn btn-info">Completed</span>
      </div>
    </div>
  </div>
`;
  getElement("tasks-container").appendChild(div);

  /* let statusBtns = document.querySelectorAll(".status-btn");
  for (i = 0; i < statusBtns.length; i++) {
    statusBtns[i].addEventListener("click", function (e) {
      const taskTitle =
        this?.parentNode?.parentNode?.childNodes[3]?.textContent;
      console.log(taskTitle);
      let completedDiv = document.createElement("div");
      console.log(completedDiv, "data.js", 79);
      completedDiv.innerHTML = `
<h2 class="my-3 border border-red-400 shadow-md p-3 rounded-md bg-gray-50">
  You have Complete The Task Add Dark Mode at 12:48:15 PM
</h2>
`;
      getElement("sidebar-card-container").appendChild(completedDiv);
      this.classList.add("opacity-30");
    });
  }
  console.log(statusBtns.length);
  for (const btn of statusBtns) {
    console.log(`btn`, btn);
  } */
}
getElement("clear-history");

eventHandler("clear-history", function () {
  getElement("sidebar-card-container").innerHTML = "";
});
let taskAssigned = getElement("task-assigned");
console.log(taskAssigned, "data.js", 129);
let tasksQuantity = datas.length;
taskAssigned.innerText = `${tasksQuantity}`;
let innertext = getInnerText("task-assigned");
console.log(innertext, "data.js", 131);
for (let i = 0; i < datas.length; i++) {
  const btn = document.getElementById(`status-btn-${i}`);

  if (btn) {
    // Ensure element exists before adding listener
    btn.addEventListener("click", function () {
      console.log(`Button ${i} clicked`);
      // this.classList.add("opacity-30"); // Example action
      tasksQuantity--;

      taskAssigned.innerText = `${tasksQuantity}`;

      let text = this?.parentNode?.parentNode?.childNodes[3]?.textContent;
      console.log(text, "data.js", 114);

      this.setAttribute("disabled", "");
      let completedDiv = document.createElement("div");
      completedDiv.innerHTML = `
<h2 class="my-3 border border-red-400 shadow-md p-3 rounded-md bg-gray-50">
  You have Completed The Task <span class="text-sky-400 text-xl font-semibold">${text} </span> at ${new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })}
</h2>
`;
      getElement("sidebar-card-container").appendChild(completedDiv);
    });
  }
}
getElement("date").innerHTML = ` 
<span class="font-normal">${new Date().toLocaleDateString("en-US", { weekday: "short" })}
</span>
<br>
${new Date()
  .toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })
  .replace(",", "")
  .replace(/(\d+) (\d+)/, "$1 $2")} `;
