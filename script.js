'use strict'
var wrapper = document.getElementsByClassName('wrapper')[0];
var taskInput = document.getElementsByClassName('task-input')[0];
var taskForm = document.getElementsByClassName('task-form')[0];
var markAll = document.getElementsByClassName('mark-all')[0];
var tasks = document.getElementsByClassName('task');

wrapper.onclick = function(e) {
    var target = e.target;
}
taskForm.onsubmit = function(e) {
  e.preventDefault();
  addTask(taskInput.value);
  console.log(taskInput.value);
  return false;
}

function addTask(task) {
  ...
}
function removeTask(target) {
  ...
}
