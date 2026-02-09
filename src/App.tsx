import React from "react";
import { ModeToggle } from "./components/theme-toggle";
import TodoList from "./components/todos/todo-list";
import UpdateTodoDialog from "./components/todos/todo-update-dialog";
import { ThemeProvider } from "./providers/theme-provider";
import type { Todo } from './types/todos';
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { useTodoStore } from "./store/todo-store";

function App() {
  const { todos, addTodo: addTodoToStore, deleteTodo, toggleComplete, updateTodo } = useTodoStore();
  const [todoText, setTodoText] = React.useState('')
  const [editingTodo, setEditingTodo] = React.useState<Todo | null>(null)

  const onChangeText = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(target.value);
  }

  const addTodo = () => {
    if (todoText === '') {
      return;
    }

    const newTodo: Todo = { id: crypto.randomUUID(), completed: false, title: todoText }
    addTodoToStore(newTodo);
    setTodoText('');
  }

  const onKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      addTodo();
    }
  }

  const onDeleteTodo = (todoId: string) => {
    deleteTodo(todoId);
  }

  const onToggleComplete = (todoId: string) => {
    toggleComplete(todoId);
  }

  const onEditTodo = (todo: Todo) => {
    setEditingTodo(todo)
  }

  const onCloseDialog = () => {
    setEditingTodo(null)
  }

  const onSaveTodo = (todoId: string, newTitle: string) => {
    updateTodo(todoId, newTitle);
    setEditingTodo(null)
  }

  return (
    <>
      <ThemeProvider>


        <div className="p-2 max-w-[1200px] m-auto">
          <h1 className="text-center">iTodo</h1>
          <Label>
            New Todo
            <div className="flex gap-2">
              <Input id='newTodo' value={todoText} onChange={onChangeText} onKeyDown={onKeyDown} placeholder="New Todo.." />
              <Button onClick={() => addTodo()}>Add Todo</Button>
            </div>
          </Label>

          <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} onToggleComplete={onToggleComplete} />
          <UpdateTodoDialog
            todo={editingTodo}
            isOpen={editingTodo !== null}
            onClose={onCloseDialog}
            onSave={onSaveTodo}
          />
        </div>
        <ModeToggle />
      </ThemeProvider >
    </>
  );
}


export default App;
