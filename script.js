const form = document.getElementById("cardForm");

const bankInput = document.getElementById("bank");
const systemInput = document.getElementById("system");
const numberInput = document.getElementById("number");
const holderInput = document.getElementById("holder");
const dateInput = document.getElementById("date");

const bankLogo = document.getElementById("bankLogo");
const systemLogo = document.getElementById("systemLogo");
const previewNumber = document.getElementById("previewNumber");
const previewHolder = document.getElementById("previewHolder");
const previewDate = document.getElementById("previewDate");

const tableBody = document.querySelector("#cardsTable tbody");

bankInput.addEventListener("input", () => {
    bankLogo.textContent =
        bankInput.value || "БАНК";
});

systemInput.addEventListener("change", () => {
    systemLogo.textContent =
        systemInput.value || "VISA";
});

numberInput.addEventListener("input", () => {

    let value = numberInput.value.replace(/\D/g, "");

    value = value.slice(0, 16);

    numberInput.value = value;

    let formatted = value.replace(
        /(\d{4})(?=\d)/g,
        "$1 "
    );

    previewNumber.textContent =
        formatted || "0000 0000 0000 0000";
});

holderInput.addEventListener("input", () => {
    previewHolder.textContent =
        holderInput.value.toUpperCase() ||
        "HOLDER NAME";
});

dateInput.addEventListener("change", () => {

    if(dateInput.value){

        const parts =
            dateInput.value.split("-");

        const year =
            parts[0].slice(2);

        const month =
            parts[1];

        previewDate.textContent =
            `${month}/${year}`;
    }

});

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const row =
        document.createElement("tr");

    row.innerHTML = `
        <td>${bankInput.value}</td>
        <td>${systemInput.value}</td>
        <td>${previewNumber.textContent}</td>
        <td>${holderInput.value}</td>
        <td>${previewDate.textContent}</td>
    `;

    tableBody.appendChild(row);

    form.reset();

    bankLogo.textContent = "БАНК";
    systemLogo.textContent = "VISA";
    previewNumber.textContent =
        "0000 0000 0000 0000";
    previewHolder.textContent =
        "HOLDER NAME";
    previewDate.textContent =
        "MM/YY";

});