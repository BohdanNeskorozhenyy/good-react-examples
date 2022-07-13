// Core
import { types } from 'mobx-state-tree';

// Instruments
import { Author } from './author-store';

export const Todo = types
    .model('Todo', {
        id:        types.identifier,
        todo:      types.string,
        completed: false,
        deadline:  types.maybeNull(types.Date),
        // создание ссылки на автора
        assignee:  types.maybeNull(types.reference(types.late(() => Author))),
    })
    .actions((self) => ({
        complete() {
            self.completed = true;
        },
        setAssignee(assignee) {
            if (assignee) {
                self.assignee = assignee;
            } else {
                self.assignee = null;
            }
        },
    }));
