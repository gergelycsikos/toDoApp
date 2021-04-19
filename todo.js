// ADDING TODOS

const addBtn = document.getElementById('add-button');
const form = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
};

addBtn.addEventListener('click', e => {
    e.preventDefault();
    const todo = form.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        form.reset();
    }
});

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = (userInput) => {

    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(userInput))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(userInput))
        .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    const userInput = search.value.toLowerCase().trim();
    filterTodos(userInput);
});