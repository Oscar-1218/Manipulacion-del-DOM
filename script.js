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
    taskContent.appendChild(taskTitule)
    const content= `
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
    console.log(content);
    task.appendChild(taskContent);
    list.appendChild(task);
    
}
///Arrow functions o funciones flechas o funciones anonimas
btn.addEventListener('click', createTask);

const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon'); //Es el equivalente a: ''far fa-check-square icon''
  i.addEventListener('click',completeTask);                                           
  return i;  
}

const completeTask = (event) => {
  //console.log(event.target);
  const element = event.target;
  element.classList.toggle('fas'); // toggle: si existe la clase la 'remove' pero si no está 'add' .
  element.classList.toggle('completeIcon'); // completeIcon es una clase definida por mi en style.css
  element.classList.toggle('far');
}
// iife (expresiones de función ejecutadas inmediatamente)
})();

