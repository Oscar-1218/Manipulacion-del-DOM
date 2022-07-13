// iife (expresiones de función ejecutadas inmediatamente)
const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add("fas", "fa-trash-alt", 'trashIcon', 'icon');
    i.addEventListener('click', eliminarTask);
    return i;
}

const eliminarTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
}
export default deleteIcon