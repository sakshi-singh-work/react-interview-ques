import React, { useState } from "react";
import styles from "./TodoList.module.scss";

interface Task {
  id: number;
  taskName: string;
}

const TodoList: React.FC = () => {
  const [addTask, setAddTask] = useState("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editTaskName, setEditTaskName] = useState<string>("");
  const [arrayOfTask, setArrayOfTask] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (editMode && editTaskId !== null) {
      // Edit existing task
      const updatedTasks = arrayOfTask.map((task) =>
        task.id === editTaskId ? { ...task, taskName: editTaskName } : task
      );
      setArrayOfTask(updatedTasks);
      setEditMode(false);
      setEditTaskId(null);
      setEditTaskName("");
    } else {
      // Add new task
      const taskId = Math.random() + 10;
      const newTask: Task = {
        id: taskId,
        taskName: addTask,
      };
      setArrayOfTask([...arrayOfTask, newTask]);
    }
    setAddTask("");
  };

  const handleDelete = (id: number) => {
    const updatedTasks = arrayOfTask.filter((task) => task.id !== id);
    setArrayOfTask(updatedTasks);
  };

  const handleEdit = (id: number, taskName: string) => {
    setEditMode(true);
    setEditTaskId(id);
    setEditTaskName(taskName);
    setAddTask(taskName);
  };

  return (
    <div className={styles.toListOuterWrapper}>
      <h1>
        <center>Add todo list to plan your task</center>
      </h1>
      <div className={styles.todoListContainer}>
        <div>
          {arrayOfTask.map((task) => (
            <div key={task.id} className={styles.wrapper}>
              {editMode && editTaskId === task.id ? (
                <input
                  className={styles.editTask}
                  type="text"
                  value={editTaskName}
                  onChange={(e) => setEditTaskName(e.currentTarget.value)}
                />
              ) : (
                <li className={styles.editTask}>{task.taskName}</li>
              )}
              <div className={styles.btnWrapper}>
                <button
                  className={styles.editbtn}
                  onClick={() => handleEdit(task.id, task.taskName)}
                >
                  Edit
                </button>
                <button
                  className={styles.deletebtn}
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.addConatiner}>
        <input
          className={styles.addTask}
          type="text"
          value={addTask}
          onChange={(e) => setAddTask(e.currentTarget.value)}
        />
        <button
          className={styles.btnAdd}
          onClick={handleAddTask}
          disabled={addTask.length == 0}
        >
          {editMode ? "Save" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
