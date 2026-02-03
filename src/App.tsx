import React from "react";
import { ModeToggle } from "./components/theme-toggle";
import TodoList from "./components/todos/todo-list";
import { ThemeProvider } from "./providers/theme-provider";
import type { Todo } from './types/todos';
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

const todos: Todo[] = [
  { id: '1', title: 'Buy groceries', completed: false },
  { id: '2', title: 'Buy groceries', completed: false },
  { id: '3', title: 'Buy groceries', completed: false },
];

function App() {
  const [todosItems, setTodosItems] = React.useState(todos)
  const [todoText, setTodoText] = React.useState('')

  const onChangeText = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(target.value);
  }

  const addTodo = () => {
    const newTodo: Todo = { id: crypto.randomUUID(), completed: false, title: todoText }
    setTodosItems(prev => [...prev, newTodo]);
    setTodoText('');
  }

  const onKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      addTodo();
    }
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

          <TodoList todos={todosItems} />
        </div>
        <ModeToggle />
      </ThemeProvider >
    </>
  );
}


export default App;
