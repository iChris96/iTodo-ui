import React from "react";
import type { Todo } from "@/types/todos";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface Props {
    todo: Todo | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (todoId: string, newTitle: string) => void;
}

const UpdateTodoDialog = ({ todo, isOpen, onClose, onSave }: Props) => {
    const [editTitle, setEditTitle] = React.useState('');

    // Update edit title when todo changes
    React.useEffect(() => {
        if (todo) {
            setEditTitle(todo.title);
        }
    }, [todo]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedTitle = editTitle.trim();
        if (trimmedTitle === '' || !todo) {
            return;
        }
        onSave(todo.id, trimmedTitle);
        setEditTitle('');
    };

    const handleOpenChange = (open: boolean) => {
        if (!open) {
            onClose();
            setEditTitle('');
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Todo</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit}>
                    <Input
                        id="updateTitle"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="border-2 border-black"
                    />
                    <Button type="submit" className="mt-4">
                        Save
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateTodoDialog;