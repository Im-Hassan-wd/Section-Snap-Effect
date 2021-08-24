const todos = document.querySelector('.todo ul');
const checks = document.querySelectorAll('.check');

checks.forEach(check => {
    check.addEventListener('click', () => {
        check.classList.remove('checked');
    })
})

todos.addEventListener('click', (e) => {
    if (e.target.classList.contains('trash')){
        if (e.target.parentElement.parentElement.nextElementSibling){
            e.target.previousElementSibling.add('checked');
            e.target.parentElement.parentElement.classList.add('delete')
            setTimeout(function() {
                e.target.parentElement.parentElement.remove();
            },1000)
        } else {
            e.target.parentElement.parentElement.classList.add('swing')
            setTimeout(function() {
                e.target.parentElement.parentElement.remove();
            },1000)
        }
    }
})

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const todo = form.add.value.trim();
    form.reset();

    addTodo(todo);
});

function addTodo(todo) {
    const html = `
        <li>
            <p>${todo}</p>
            <img src="trash.svg" alt="">
        </li>
    `;

    todos.innerHTML += html;
}