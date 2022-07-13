import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

(() => { const btn = document.querySelector('[data-formulario-boton]');
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-formulario-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = "";
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const taskTitule = document.createElement('span');
    taskTitule.classList.add('task');
    taskTitule.innerHTML = value;
    taskContent.appendChild(taskTitule);
    const content= `
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.appendChild(taskContent);
    list.appendChild(task);
    task.appendChild(deleteIcon());
    
}
///Arrow functions o funciones flechas o funciones anonimas
btn.addEventListener('click', createTask);

})();
