// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
  let input = document.getElementById('amigo');
  let nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor. Ingrese un nombre válido.');
    return;
  }

  nombres.push(nombre);
  input.value = '';
  input.focus();
  mostrarLista();
}

function mostrarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < nombres.length; i++) {
    let li = document.createElement('li');
    li.textContent = nombres[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (nombres.length === 0) {
    alert('No hay nombres para sortear.');
    return;
  }

  let indice = Math.floor(Math.random() * nombres.length);
  let resultado = nombres[indice];

  document.getElementById('resultado').textContent =
    'El amigo secreto es: ' + resultado;
}