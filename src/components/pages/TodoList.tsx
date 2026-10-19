import { useState } from "react";

interface Todo {
  id: number;
  description: string;
  isCompleted: boolean;
}

const todoList: Todo[] = [
  {
    id: 1,
    description: "buka mata",
    isCompleted: false,
  },
  {
    id: 2,
    description: "bangun pagi",
    isCompleted: false,
  },
  {
    id: 3,
    description: "gosok gigi",
    isCompleted: false,
  },
  {
    id: 4,
    description: "tidur",
    isCompleted: false,
  },
];

function TodoList() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>(todoList);

  // function untuk melakukan updating todolist
  function handleAddTodo() {
    setTodos((todoSebelumnya) => [
      ...todoSebelumnya,
      { id: Date.now(), description: value, isCompleted: false },
    ]);

    setValue("");
  }

  function handleDeleteTodo(id: number) {
    // const deletedTodo: Todo | undefined = todos.find((todo) => todo.id === id);
    // if (!deletedTodo) {
    //   return;
    // }

    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEditTodo(id: number) {
    const todo = todos.find((item) => item.id == id);
    if (todo !== undefined) setValue(todo.description);
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      {/* bagian tampilan todolist */}
      <ul>
        {todos.map((val) => {
          return (
            <li key={val.id}>
              {val.id} - {val.description} - {val.isCompleted ? "done" : "todo"}
              <button
                className="p-2 bg-red-600"
                onClick={() => handleDeleteTodo(val.id)}>
                Delete
              </button>
              <button
                className="p-2 bg-yellow-600"
                onClick={() => handleEditTodo(val.id)}>
                Edit
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={handleAddTodo}
        className="bg-amber-900 text-amber-100 text-2xl w-fit">
        Add
      </button>
    </div>
  );
}

export default TodoList;
