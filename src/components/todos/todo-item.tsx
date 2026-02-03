import type { Todo } from '@/types/todos';
import { Trash2Icon } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';

interface Props {
    todo: Todo;
    onDeleteTodo: (todoId: string) => void;
}
const TodoItem = ({ todo, onDeleteTodo }: Props) => {
    // const [checked, setChecked] = React.useState(false);

    return (
        <li key={todo.id} className="bg-brand flex justify-between items-center p-4 border-border border-3">
            <Checkbox className="bg-white data-[state=checked]:bg-white rounded-full w-8 h-8" />
            <h4>{todo.title}</h4>
            <Button variant="reverse" size="icon" className='hover:cursor-pointer' onClick={() => onDeleteTodo(todo.id)}>
                <Trash2Icon className="w-4 h-4" />
            </Button>
        </li>
    );
};

export default TodoItem;
