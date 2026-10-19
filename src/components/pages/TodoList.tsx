interface Todo {
  id: number;
  description: string;
  isCompleted: boolean;
}

let todos: Todo[] = [
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
    <div>
      <h1>Todo List Batch 10</h1>
      <div></div>
    </div>
  );
}

export default TodoList;
