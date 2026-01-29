const dataset = [
    { id: 1, name: "Ivanov", age: 30 },
    { id: 2, name: "Petrov", age: 24 },
    { id: 3, name: "Sidorov", age: 10 },
    { id: 4, name: "Pavlov", age: 45 }
];


const renderHeaders = (headers) => {
    const thead = document.getElementById("thead_Id");
    thead.innerHTML = ''; 
    const tr = thead.insertRow();
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        tr.appendChild(th);
    });
};


const renderTable = (data, headers) => {
    const tbody = document.getElementById("tbody_Id");
    tbody.innerHTML = ''; 
    data.forEach(el => {
        const tr = tbody.insertRow();
        headers.forEach(header => {
            const cell = tr.insertCell();
            cell.textContent = el[header.toLowerCase()];
        });
    });
};


const headers = ["ID", "Name", "Age"];

// Инициализация таблицы
renderHeaders(headers);
renderTable(dataset, headers);


function addHeader() {
    const newHeader = prompt("Введите название нового заголовка:");
    if (newHeader) {
        headers.push(newHeader);
        dataset.forEach(el => {
            el[newHeader.toLowerCase()] = ""; 
        });
        renderHeaders(headers);
        renderTable(dataset, headers);
    }
}

// Функция для добавления новой строки
function addRow() {
    const newRow = {};
    headers.forEach(header => {
        const value = prompt(`Введите значение для "${header}":`);
        newRow[header.toLowerCase()] = value;
    });
    dataset.push(newRow);
    renderTable(dataset, headers);
}
