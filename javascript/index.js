let buttonAdd = document.getElementById("buttonInput");
let input = document.getElementById("inputText");
let main = document.getElementById("areaLista");
let contadorID = 0;

input.addEventListener('keyup', function (event) {
    //Se teclou Enter (13)
    if (event.key === "Enter") {
        event.preventDefault();
        buttonAdd.click();
    }
})

/* buttonAdd.addEventListener("click", addTarefa); */

function addTarefa() {
    let valorDigitado = input.value;
    let sizeString;

    if (valorDigitado == null || valorDigitado == "" || valorDigitado == undefined) {
        return;
    }
    if ((valorDigitado != null) && (valorDigitado != "") && (valorDigitado != undefined)) {

        contadorID++;


        let novoItem = `
        <div id="${contadorID}" class="item">
            <div onclick="selecionarTarefa(${contadorID})" class="item-icone">
                <img src="./assets/circle.png" alt="">
            </div>
            <div onclick="selecionarTarefa(${contadorID})" class="item-nome" title="${valorDigitado}">
                ${valorDigitado}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contadorID})" class="delete">
                    <img class="icon" src="./assets/trash.png" alt="">
                    <p>Deletar</p>
                </button>
            </div>
        </div>
        `;
        main.innerHTML += novoItem;
        input.value = "";
        input.focus();
    }
}

function deletar(idTarefaDeletada) {
    var tarefa = document.getElementById(idTarefaDeletada);
    tarefa.remove();
}

function selecionarTarefa(contadorID) {
    var item = document.getElementById(contadorID);
    var classe = item.getAttribute('class');
    var icone = item.querySelector(".item-icone img");

    if (classe == "item") { //Se a classe for somente ITEM
        item.classList.add('clicado');
        icone.src = "./assets/check-circle.png";

        item.parentNode.appendChild(item); //Adiciona o item no final da lista

    }
    else if (classe == "item clicado") {
        item.classList.remove('clicado');
        icone.src = "./assets/circle.png";
    }
}


