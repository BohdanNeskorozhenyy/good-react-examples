// Core
import { types } from 'mobx-state-tree';

export const Todo = types
    .model('Todo', {
        id:        types.identifier,
        todo:      types.string,
        completed: false,
    })
    .actions((self) => ({
        /**
         * Экшены определённые на уровне модели будут оперировать с данными этой конкретной модели.
         * */
        complete() {
            self.completed = true;
        },
    }));
