function generateCard() {
    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();
   //const selectedTemplate = document.getElementById("templateSelect").value;

    if(name === "" || message === "") {
        showAlert("Please fill in both fields ❤️");
        return;
    }

    document.getElementById("cardTitle").innerHTML =
        "Happy Hearts's Day from " + name + " 💕";

    document.getElementById("cardMessage").innerHTML =
        message + " 🌹💖";

    document.getElementById("envelopeContainer").style.display = "flex";
}

function openEnvelope() {
    document.querySelector(".envelope").classList.toggle("open");
}



function downloadCard() {
    const cardMessage = document.getElementById("envelopeContainer");

    if(envelopeContainer.style.display === "none") {
        showAlert("Generate the card first 🤍");
        return;
    }

    html2canvas(envelopeContainer).then(canvas => {
        const link = document.createElement("a");
        link.download = "valentine-specialcard.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}

const templateSelect = document.getElementById("templateSelect");

templateSelect.addEventListener("change", function() {

    // Remove previous classes
    templateSelect.classList.remove("classic", "romantic", "cute");

    // Add selected class
    templateSelect.classList.add(this.value);

});
function showAlert(message) {
    const alertBox = document.getElementById("customAlert");
    document.getElementById("alertMessage").textContent = message;
    alertBox.style.display = "block";
}

function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}



