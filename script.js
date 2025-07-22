const inputTarefa = document.getElementById('tarefaInput');
const btnAdicionar = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');

function criarTarefa(texto) {
  const li = document.createElement('li');

  const spanTexto = document.createElement('span');
  spanTexto.textContent = texto;
  spanTexto.style.flex = '1';

  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.classList.add('remove-btn');

  const btnConcluir = document.createElement('button');
  btnConcluir.textContent = 'Concluir';
  btnConcluir.classList.add('concluir-btn');

 
  btnConcluir.addEventListener('click', () => {
    spanTexto.classList.toggle('concluida');
  });

  btnRemover.addEventListener('click', () => {
    listaTarefas.removeChild(li);
  });

  li.appendChild(spanTexto);
  li.appendChild(btnRemover);
  li.appendChild(btnConcluir);

  return li;
}

btnAdicionar.addEventListener('click', () => {
  const textoTarefa = inputTarefa.value.trim();
  if (textoTarefa === '') {
    alert('Por favor, digite uma tarefa!');
    return;
  }

  const novaTarefa = criarTarefa(textoTarefa);
  listaTarefas.appendChild(novaTarefa);

  inputTarefa.value = '';
  inputTarefa.focus();
});


inputTarefa.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    btnAdicionar.click();
  }
});
