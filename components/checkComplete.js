const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon'); //Es el equivalente a: ''far fa-check-square icon''
    i.addEventListener('click',completeTask);                                           
    return i;  
}

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas'); // toggle: si existe la clase la 'remove' pero si no está 'add' .
    element.classList.toggle('completeIcon'); // completeIcon es una clase definida por mi en style.css
    element.classList.toggle('far');
}
export default checkComplete;