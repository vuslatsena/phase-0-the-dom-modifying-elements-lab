// Write your code here!

const removingMain = document.getElementById("main");
removingMain.remove();

const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);

newHeader.id = "victory";
newHeader.textContent = "Vuslat is the champion";