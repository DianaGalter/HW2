'use strict'
var wrapper = document.getElementsByClassName('wrapper')[0];
var taskInput = document.getElementsByClassName('task-input')[0];
var taskForm = document.getElementsByClassName('task-form')[0];
var markAll = document.getElementsByClassName('mark-all')[0];
var l = console.log;

wrapper.onclick = function(e) {
    var target = e.target;
    var targetClassList = target.classList;
    if (targetClassList.contains('delete')) {
        removeTask(target);
    };
    if (targetClassList.contains('deadline')) {
        addDeadline(target);
    };
    if (targetClassList.contains('mark-all__checkbox')) {
        allChecked();
    };

};
taskForm.onsubmit = function(e) {
  e.preventDefault();
  addTask(taskInput.value);
  markAll.classList.remove('invisible');
  return false;
};

function addTask(task) {
    var todoUl = document.getElementsByClassName('todo-list')[0];
    var taskHTML = `<li class="todo-list__li">
        <label class="task">
            <input type="checkbox" class="mark">
            <div class="task__text">` + task + `</div>
        </label>
        <a class="deadline" title="Set the deadline"></a>
        <a class="delete" title="Delete the task"></a>
    </li>`;
    if (todoUl) {
        todoUl.innerHTML += taskHTML;
    } else {
        var ul = document.createElement('ul');
        ul.className = 'todo-list';
        wrapper.appendChild(ul);
        ul.innerHTML = taskHTML;
    };
    taskInput.value = "";
};

function removeTask(target) {
  target.parentNode.remove();
};

function addDeadline(target) {
    var dataToday = document.createElement('input');
    dataToday.type = "date";
    dataToday.className = "dataToday";
    dataToday.valueAsDate = new Date();
    target.parentNode.insertBefore(dataToday, target);
    target.remove();
}

function allChecked() {
    var tasks = document.getElementsByClassName('task');
    var marks = document.getElementsByClassName('mark');
    var length = tasks.length;
    for(var i = 0; i < length; i++) {
        tasks[i].classList.toggle('cross-out');
        marks[i].checked = !marks[i].checked;
    };

};
