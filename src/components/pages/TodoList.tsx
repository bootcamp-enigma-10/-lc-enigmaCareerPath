interface Todo {
  id: number;
  description: string;
  isCompleted: boolean;
}

const todos: Todo[] = [
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
  return (
    <div className="flex flex-col">
      <h1>Todo List Batch 10</h1>
      {todos.map((val) => {
        return (
          <div className="flex gap-2">
            <h1>{val.id}</h1>
            <h2>{val.description}</h2>
            <h3>{val.isCompleted ? "true" : "false"}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
