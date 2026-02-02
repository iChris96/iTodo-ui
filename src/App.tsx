import { ModeToggle } from "./components/theme-toggle";
import TodoList from "./components/todos/todo-list";
import { ThemeProvider } from "./providers/theme-provider";
import type { Todo } from './types/todos';

const todos: Todo[] = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Buy groceries', completed: false },
  { id: 3, title: 'Buy groceries', completed: false },
];

function App() {

  return (
    <>
      <ThemeProvider>
        <h1>iTodo</h1>
        <h2>Hello world!</h2>
        <TodoList todos={todos} />
        <ModeToggle />
      </ThemeProvider>
    </>
  );
}


export default App;
