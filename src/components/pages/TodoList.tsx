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

function add(a: number, b: number) {
  return a + b;
}
add(1, 5);

function TodoList() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>(todoList);
  const [isEditing, setIsEditng] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  // function untuk melakukan updating todolist
  function handleAddTodo() {
    
    if(isEditing){
      setTodos((todoSebelumnya) =>
      todoSebelumnya.map((todo) =>
        todo.id === editId ? { ...todo, description: value } : todo,
      ),
    );
    }else{
      setTodos((prev) => [
        ...prev, {id: Date.now(), description: value, isCompleted: false}
      ])
      setIsEditng(false)
    }

    setValue("");
    setEditId(null);
    
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
    if (todo !== undefined) {
      setValue(todo.description);
      setIsEditng(true);
      setEditId(id);
    }
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
                onClick={() => handleDeleteTodo(val.id)}
              >
                Delete
              </button>
              <button
                className="p-2 bg-yellow-600"
                onClick={() => handleEditTodo(val.id)}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={ handleAddTodo }
        className="bg-amber-900 text-amber-100 text-2xl w-fit"
      >
        {isEditing ? "Save" : "Add"}
      </button>
    </div>
  );
}

export default TodoList;
