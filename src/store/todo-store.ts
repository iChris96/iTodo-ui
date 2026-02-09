import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Todo } from '../types/todos';

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (todoId: string) => void;
  toggleComplete: (todoId: string) => void;
  updateTodo: (todoId: string, newTitle: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
      deleteTodo: (todoId: string) =>
        set((state) => ({
          todos: state.todos.filter((todo: Todo) => todo.id !== todoId),
        })),
      toggleComplete: (todoId: string) =>
        set((state) => ({
          todos: state.todos.map((todo: Todo) =>
            todo.id === todoId
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        })),
      updateTodo: (todoId: string, newTitle: string) =>
        set((state) => ({
          todos: state.todos.map((todo: Todo) =>
            todo.id === todoId ? { ...todo, title: newTitle } : todo
          ),
        })),
    }),
    {
      name: 'todo-storage', // unique name for localStorage key
    }
  )
);
