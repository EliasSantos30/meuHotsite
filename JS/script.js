const logo = document.getElementById("logo");
const mais = document.getElementById("mais");

logo.addEventListener('click', function() {
    window.location.pathname = 'hotsite-main/index.html';
})

mais.addEventListener('click', function() {
    alert("Essa função ainda está em desenvolvimento.")
})

let pai = document.getElementById("select");

pai.style.position = "relative";

let filho = document.createElement("container");

filho.setAttribute("class", "container");
filho.setAttribute("id", "container");

pai.appendChild(filho);

const container = document.getElementById("container");

container.style.position = "absolute";
container.style.width = "12px";
container.style.height = "12px";
container.style.transform = "translate(50%)";
container.style.top = "-15px";
container.style.right = "50%";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";

let seta = document.createElement("img");
seta.setAttribute("class", "seta");
seta.setAttribute("id", "seta");
seta.src = "IMG/seta.png";
seta.alt = "Minha seta";
seta.width = 12;
seta.height = 12;

filho.appendChild(seta);