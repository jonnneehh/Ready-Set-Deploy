tasks = []

function addTask() {
    var value = document.getElementById('new-todo').value
    if(value !== '') {
        tasks.push(value)
        display_tasks()
        document.getElementById('new-todo').value = ''
        document.getElementById('new-todo').focus()
    }
}

function removeTask(id) {
    tasks.splice(id, 1)
    display_tasks()
}

function display_tasks() {
    // removing children
    var parent = document.getElementById('tasks')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    // re-adding children
    for (var i = 0; i < tasks.length; i++) {
        var div = document.createElement('div')
        div.className = 'task-item'
        div.id = `tasks-${i}`
        div.style.display = 'flex'
        var span = document.createElement('span')
        span.innerHTML = tasks[i]
        var button = document.createElement('button')
        button.innerHTML = "Finish"
        button.id = i
        button.className = 'finish-button'
        button.onclick = (event) => removeTask(event.target.id)
        div.appendChild(span)
        div.appendChild(button)
        document.getElementById('tasks').appendChild(div)
    }
}