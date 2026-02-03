import React from "react";
import { ModeToggle } from "./components/theme-toggle";
import TodoList from "./components/todos/todo-list";
import UpdateTodoDialog from "./components/todos/todo-update-dialog";
import { ThemeProvider } from "./providers/theme-provider";
import type { Todo } from './types/todos';
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

function App() {
  const [todosItems, setTodosItems] = React.useState<Todo[]>([])
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
    setTodosItems(prev => [...prev, newTodo]);
    setTodoText('');
  }

  const onKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      addTodo();
    }
  }

  const onDeleteTodo = (todoId: string) => {
    setTodosItems(prevItems => prevItems.filter(todo => todo.id !== todoId))
  }

  const onEditTodo = (todo: Todo) => {
    setEditingTodo(todo)
  }

  const onCloseDialog = () => {
    setEditingTodo(null)
  }

  const onSaveTodo = (todoId: string, newTitle: string) => {
    setTodosItems(prev => prev.map(todo =>
      todo.id === todoId
        ? { ...todo, title: newTitle }
        : todo
    ))
    setEditingTodo(null)
  }

  return (
    <>
      <ThemeProvider>


        <div className="p-2 max-w-4/5 m-auto">
          <h1>iTodo</h1>
          <h2>Hello world!</h2>
          <Label>
            New Todo:
            <div className="flex gap-2">
              <Input id='newTodo' value={todoText} onChange={onChangeText} onKeyDown={onKeyDown} placeholder="New Todo.." />
              <Button onClick={() => addTodo()}>Add Todo</Button>
            </div>
          </Label>

          <TodoList todos={todosItems} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} />
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
