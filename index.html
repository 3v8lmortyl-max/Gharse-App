const form = document.getElementById("serviceForm");
const serviceList = document.getElementById("serviceList");
const searchBox = document.getElementById("searchBox");

let services = JSON.parse(localStorage.getItem("services")) || [];

function displayServices(filtered = services) {
  serviceList.innerHTML = "";
  filtered.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.service}</strong> by ${item.name} at ${item.location} — Contact: ${item.contact}`;
    serviceList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newService = {
    name: document.getElementById("name").value,
    service: document.getElementById("service").value,
    location: document.getElementById("location").value,
    contact: document.getElementById("contact").value,
  };
  services.push(newService);
  localStorage.setItem("services", JSON.stringify(services));
  form.reset();
  displayServices();
});

searchBox.addEventListener("input", () => {
  const keyword = searchBox.value.toLowerCase();
  const filtered = services.filter(
    (s) =>
      s.name.toLowerCase().includes(keyword) ||
      s.service.toLowerCase().includes(keyword) ||
      s.location.toLowerCase().includes(keyword)
  );
  displayServices(filtered);
});

window.onload = displayServices;
