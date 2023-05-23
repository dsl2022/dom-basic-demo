// DOM elements
const boxCountInput = document.querySelector("#boxCount");
const generateBtn = document.querySelector("#generateBtn");
const boxContainer = document.querySelector("#boxContainer");

// Function to generate boxes
function generateBoxes() {
  // Clear existing boxes
  boxContainer.innerHTML = "";

  // Get the number of boxes from the input field
  const count = parseInt(boxCountInput.value);

  // Generate boxes
  for (let i = 0; i < count; i++) {
    const box = document.createElement("div");
    box.className = "box";
    boxContainer.appendChild(box);
  }
}

// Event listener for the generate button
generateBtn.addEventListener("click", generateBoxes);
