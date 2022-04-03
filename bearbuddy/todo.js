const findEl = selector => document.querySelector(selector)

const TODOS = []

const NODE = {
  APP: findEl('.app'),
  FORM: findEl('.form'),
  TODOS: findEl('.todos')
}

const TEMPLATE = {
  TODO: todoRender
}

function todoRender({ text, date }) {
  return `<div class="todo">
    <h2 class="todo__headline">${text}</h2>
    <time class="todo__time" datetime="${new Date(date).toISOString()}">${date}</time>
  </div>`
}

NODE.FORM.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(NODE.FORM),
        todoData = {
          text: formData.get('text'),
          date: new Date()
        }

  const index = TODOS.push(todoData) - 1

  updateTOdo(index)
})

NODE.TODOS.addEventListener('click', clickcheck)
function updateTOdo(index) {
  NODE.TODOS.insertAdjacentHTML('beforeend', TEMPLATE.TODO(TODOS[index]))
}
function clickcheck(e) {
  if (e.target.closest('.todo')) e.target.closest('.todo').remove()
}
function taskload() {
  if (!TODOS.length) return
  else TODOS.forEach(TODO => NODE.TODOS.insertAdjacentHTML('beforeend', TEMPLATE.TODO(TODO)))
}
taskload()