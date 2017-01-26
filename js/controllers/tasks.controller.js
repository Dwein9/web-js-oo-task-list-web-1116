'use strict';
// Tasks Controller

function TasksController(){
  this.$addTaskForm = $("#add_task")
  this.$taskDescriptionInput = $("#task_description")
  this.$selectListMenu = $("#select_list")
  this.$taskPriorityInput = $("#task_priority")
  this.$wrapper = $("#wrapper")
}

TasksController.prototype.init = function(){
  this.$addTaskForm.submit((event) => {
    event.preventDefault()
    var id = this.$selectListMenu.val()
    var task = new Task(this.$taskDescriptionInput.val(),this.$taskPriorityInput.val(), List.all[id] )
    task.build()

    //DELETE
    $('.destroy-task').click(function () {
      this.parentElement.remove()
      task.list.tasks[id] = null
    })
  })
}
