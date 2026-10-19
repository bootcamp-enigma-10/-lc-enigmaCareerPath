import { useState } from "react";
import { todoList } from "../../data/todos";
import type { Todo } from "../../types/todo.type";
import ToDoListItem from "../todoList/todoListItem";

function TodoList() {
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState<Todo[]>(todoList);
  const [editId, setEditId] = useState<number | null>(null);

  const isEditing = editId != null;

  // function untuk melakukan updating todolist
  function handleAddTodo() {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), description: description, isCompleted: false },
    ]);

    setDescription("");
    setEditId(null);
  }

  function handleSaveTodo() {
    setTodos((todoSebelumnya) =>
      todoSebelumnya.map((todo) =>
        todo.id === editId ? { ...todo, description: description } : todo,
      ),
    );

    setDescription("");
    setEditId(null);
  }

  function handleDeleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEditTodo(todo: Todo) {
    setDescription(todo.description);
    setEditId(todo.id);
  }

  return (
    <div className="flex flex-col">
      {/* title */}
      <h1>Todo List Batch 10</h1>

      {/* user input */}
      <div>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* bagian tampilan todolist */}
      <ul>
        {todos.map((val) => (
          <ToDoListItem
            key={val.id}
            todo={val}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
          />
        ))}
      </ul>
      <button
        onClick={isEditing ? handleSaveTodo : handleAddTodo}
        className="bg-amber-900 text-amber-100 text-2xl w-fit"
      >
        {isEditing ? "Save" : "Add"}
      </button>
    </div>
  );
}

export default TodoList;
