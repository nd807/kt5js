const form = document.getElementById('cardForm');

const bank = document.getElementById('bank');
const system = document.getElementById('system');
const number = document.getElementById('number');
const holder = document.getElementById('holder');
const date = document.getElementById('date');

const bankLogo = document.getElementById('bankLogo');
const systemLogo = document.getElementById('systemLogo');
const previewNumber = document.getElementById('previewNumber');
const previewHolder = document.getElementById('previewHolder');
const previewDate = document.getElementById('previewDate');

const tableBody =
document.querySelector('#cardsTable tbody');

bank.addEventListener('input', () => {
    bankLogo.textContent = bank.value || 'Банк';
});

system.addEventListener('change', () => {
    systemLogo.textContent = system.value || 'VISA';
});

number.addEventListener('input', () => {

    let value = number.value.replace(/\D/g,'');

    value = value.substring(0,16);

    number.value = value;

    previewNumber.textContent =
        value.replace(/(\d{4})(?=\d)/g,'$1 ');

    if(value.length === 0){
        previewNumber.textContent =
        '0000 0000 0000 0000';
    }
});

holder.addEventListener('input', () => {
    previewHolder.textContent =
    holder.value.toUpperCase() || 'HOLDER NAME';
});

date.addEventListener('change', () => {

    if(date.value){

        const parts = date.value.split('-');

        previewDate.textContent =
        parts[1] + '/' + parts[0].slice(2);

    }
});

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${bank.value}</td>
        <td>${system.value}</td>
        <td>${number.value}</td>
        <td>${holder.value}</td>
        <td>${previewDate.textContent}</td>
    `;

    tableBody.append(row);

    form.reset();

    bankLogo.textContent = 'Банк';
    systemLogo.textContent = 'VISA';
    previewNumber.textContent =
    '0000 0000 0000 0000';
    previewHolder.textContent =
    'HOLDER NAME';
    previewDate.textContent =
    'MM/YY';

});