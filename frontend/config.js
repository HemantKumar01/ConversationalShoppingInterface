config = { username: "Hemant" };

const configModal = document.querySelector("#config");
const configToggleButton = document.querySelector(".configButton");

function fillConfigData() {
  configModal.querySelector("input#username").value = config.username;
  configModal.querySelector("input#username").onchange = () => {
    config.username = configModal.querySelector("input#username").value;
  };
}

// configToggleButton.onclick = () => {
//   configModal.style.display = "block";
//   fillConfigData();
// };
configModal.querySelector("button.launch").onclick = () => {
  configModal.style.display = "none";
  launchApp();
};
