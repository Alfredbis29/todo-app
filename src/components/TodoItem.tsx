import type { FC } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todo: Todo;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: FC<Props> = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <li className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
      <div
        className={`flex-1 cursor-pointer ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className="ml-3 text-red-500 hover:text-red-700 transition"
      >
        ✕
      </button>
    </li>
  );
};

export default TodoItem;
