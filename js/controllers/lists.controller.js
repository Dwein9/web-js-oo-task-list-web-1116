'use strict';
// Lists Controller
function ListsController() {
  this.$addListForm = $("#add_list")
  this.$listTitleInput = $("#list_title")
  this.$selectListMenu = $("#select_list")
  this.$addTaskForm = $("#add_task")
  this.$wrapper = $("#wrapper")
}

ListsController.prototype.init = function(){
  this.$addTaskForm.hide()
  this.$addListForm.submit((event) => {
    event.preventDefault()
    this.$addTaskForm.show()
    // this.addEventListener("click", this.build)
    // this.build()
    var list = new List(this.$listTitleInput.val())
    list.build()
  })
}
