//task list
const tasks_list = document.getElementById("tasksList");
const list_notification = document.getElementById("notification");

//add task with 'Add Button' or 'Enter Key'
const taskAdd_input = document.getElementById("taskInput");
const taskAdd_button = document.getElementById("taskAdd");

taskAdd_button.addEventListener("click", CreateTask);
taskAdd_input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    CreateTask();
  }
});
ListNotification();

//function:create and delete task
function CreateTask() {
  const input_text = taskAdd_input.value;
  if (input_text !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = input_text;

    //delete task:start
    const delete_button = document.createElement("button");
    delete_button.classList.add("delete");
    delete_button.innerHTML = "✖";
    delete_button.addEventListener("click", function (event) {
      const confirm_delete = window.confirm(
        "Are you sure you want to delete this task?"
      );
      if (confirm_delete) tasks_list.removeChild(newTask);
      ListNotification();
    });
    newTask.appendChild(delete_button);
    //delete task:end

    tasks_list.appendChild(newTask);
    taskAdd_input.value = "";
    ListNotification();
  } else if (input_text == "") {
    alert("Please Write A New Task!");
  }
}

//function:empty or occupied list notification
function ListNotification() {
  if (tasks_list.children.length === 0) {
    list_notification.innerHTML = "Sorry, your task list is empty.";
  } else {
    list_notification.innerHTML = "Your Task List :"; //or ""
  }
}
