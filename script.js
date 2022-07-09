const btn = document.querySelector('[data-formulario-boton]');
///Arrow functions o funciones flechas o funciones anonimas
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-formulario-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = "";
    const content= `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
    console.log(content);
    task.innerHTML = content;
    list.appendChild(task);
    
}

btn.addEventListener('click', createTask);

