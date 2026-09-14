import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, text: "خرید لوازم خانه", done: false },
      { id: 2, text: "خواندن درس", done: false },
    ];
  });
  const [filter, setFilter] = useState("all");
  function addTask() {
    const newTask = { id: Date.now(), text: newTaskText, done: false };
    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks), [tasks]);
  });
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });
  const remainingCount = tasks.filter((task) => !task.done).length;

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="filter-bar">
        <button
          className={
            filter === "all" ? "filter-button active" : "filter-button"
          }
          onClick={() => setFilter("all")}
        >
          همه
        </button>
        <button
          className={
            filter === "active" ? "filter-button active" : "filter-button"
          }
          onClick={() => setFilter("active")}
        >
          فعال
        </button>
        <button
          className={
            filter === "done" ? "filter-button active" : "filter-button"
          }
          onClick={() => setFilter("done")}
        >
          انجام‌شده
        </button>
      </div>
      <p>{remainingCount}تسک های باقی مانده</p>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="task-item"
            style={{ textDecoration: task.done ? "line-through" : "none" }}
          >
            {task.text}
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(task.id);
              }}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
      <input
        className="task-input"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button className="add-button" onClick={addTask}>
        افزودن
      </button>
    </div>
  );
}

export default App;
