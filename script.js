const localStorageName = `toDoList`;

function validarTarefa() {
    let valores = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    let valorTarefa = document.getElementById(`tarefa`).value;
    let existe = valores.find(x => x.nome == valorTarefa);
    return !existe ? false : true;
}

function novaTarefa() {
    let tarefa = document.getElementById(`tarefa`);
    if (!tarefa.value) {
        alert(`Digite algo para adicionar à lista seu animal!!!!`);
    }
    else if (validarTarefa()) {
        alert('Já existe uma tarefa com essa descrição!!!');
    }
    else {
        let valores = JSON.parse(localStorage.getItem(localStorageName) || "[]");
        valores.push({
            nome: tarefa.value
        });
        localStorage.setItem(localStorageName, JSON.stringify(valores));
        mostrarValores();
    }
    tarefa.value = '';
}

function mostrarValores() {
    let valores = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    let lista = document.getElementById("toDoList");
    lista.innerHTML = '';
    for (let i = 0; i < valores.length; i++) {
        lista.innerHTML += `<li id="liDefault" class="${valores[i].completed ? 'complete' : 'default'}">
            <button id="okButton" onclick='completeItem(${i})'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
          </svg></button>
            ${valores[i]['nome']}
            <button id="removeButton" onclick='removeItem("${valores[i]['nome']}")'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
          </svg></button>
        </li>`;
    }
}

function removeItem(data) {
    let valores = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    let index = valores.findIndex(x => x.nome == data);
    valores.splice(index, 1);
    localStorage.setItem(localStorageName, JSON.stringify(valores));
    mostrarValores();
}

function completeItem(index) {
    let valores = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    valores[index].completed = true;
    localStorage.setItem(localStorageName, JSON.stringify(valores));
    mostrarValores();
}

mostrarValores();