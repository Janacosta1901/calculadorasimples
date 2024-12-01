function adicionarValor(valor) {
    const display = document.getElementById('display');
    display.value += valor;
}

function calcular() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}

function limparDisplay() {
    document.getElementById('display').value = '';
}
