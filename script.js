const btn = document.querySelector('[data-formulario-boton]');
///Arrow functions o funciones flechas o funciones anonimas
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-formulario-input]');
    console.log(input.value);
}

btn.addEventListener('click', createTask);

