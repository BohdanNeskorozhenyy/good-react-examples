// Core
import { types } from 'mobx-state-tree';

export const Todo = types
    .model('Todo', {
        id:        types.identifier,
        todo:      types.string,
        completed: false,
        deadline:  types.maybeNull(types.Date),
    })
    .actions((self) => ({
        complete() {
            self.completed = true;
        },
    }));
