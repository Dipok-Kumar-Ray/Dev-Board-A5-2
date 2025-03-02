const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "teal",
];
let index = 0;

function colorChange() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

function handleClick(buttonId, isDoubleAlert = false) {
  if (isDoubleAlert) {
    alert("Board Update Successfully !"); // First alert
    alert("Congrate! You have completed all the current task"); // Second alert
  } else {
    alert("Board Update Successfully !");
  }

  let button = document.getElementById(buttonId);
  button.disabled = true; // Disable the button

  // Remove the previous button colors
  button.classList.remove(
    "btn-primary",
    "btn-success",
    "btn-error",
    "btn-warning",
    "btn-info",
    "btn-secondary"
  );

  // Add the gray color when disabled
  button.classList.add(
    "bg-gray-400",
    "text-white",
    "cursor-not-allowed",
    "border-gray-500"
  );

  //

  let decreaseElem = document.getElementById("decrement");
  let increaseElem = document.getElementById("increment");

  let logElem = document.getElementById("log");
  const taitle = document.getElementById("p-taitle").innerText;

  let decreaseValue = parseInt(decreaseElem.textContent);
  let increaseValue = parseInt(increaseElem.textContent);

  if (decreaseValue > 0) {
    decreaseElem.textContent = decreaseValue - 1;
    increaseElem.textContent = increaseValue + 1;
  }
  const d = new Date();
  document.getElementById("demo").innerHTML = d;

  let now = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  let formattedDate = now.toLocaleString(options);

  const container = document.getElementById("history");
  const p = document.createElement("p");
  p.innerText = `
     You have completed the task
      ${taitle} 
      at ${formattedDate} 
     
     `;
  container.appendChild(p);
}

//load anad reload button
function redirectPage() {
  window.location.href = "main.html";
}
function reloadPage() {
  window.location.href = "index.html";
}

document.getElementById("clearHistory").addEventListener("click", function () {
  const count = (document.getElementById("log").style.display = "none");
});

document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
  const btnBu = (document.getElementById("log").style.display = "none");
});

document.getElementById("newPage").addEventListener("click", function () {
  document.getElementById("main").style.display = "none";
  document.getElementById("main2").style.display = "block";
});
document.getElementById("back").addEventListener("click", function () {
  document.getElementById("main").style.display = "block";
  document.getElementById("main2").style.display = "none";
});
