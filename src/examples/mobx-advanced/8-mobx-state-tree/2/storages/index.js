// Core
import { types } from 'mobx-state-tree';

/**
 * types.model — определяет class like тип с экшенами для манипулирования свойствами объекта
 * type.array — определяет массив элементов определенного типа
 * type.map — определяет Map элементов определенного типа
 *
 * types.union — определяет свойство объекта как то которое может быть или того или того типа (количество не ограничено)
 * types.optional — определяет свойство объекта как опицональное
 * types.literal — создаёт тип где значение может быть только чем-то одним. например строкой — male
 * types.enumeration — аналогичен перечислениям в TypeScript
 * types.refinement — создаёт примитвные типы(более ограниченные, например диапазон числе от 0 до 1000)
 * types.maybe — опицональный и nullable
 * types.maybeNull — аналогичен maybe но иницилизирует отсутствие значение null, в отличии от undefined в случае с maybe
 * types.null — тип null
 * types.undefined — тип undefined
 * types.compose — аналог расширения в классах. Создаёт новую модель на основании существующей добавляя новые типы
 * types.reference — создаёт своство которое ссылется на другое в этом же дереве.
 * types.snapshotProcessor — используется для запуска пре- и пост- процессора до и после сериализации.
 *
 * types.identifier — определяет что только одно такое свойство может быть в модели
 * types.identifierNumber — аналогичен identifier за исключением того что при сериализации значение будет парсится как число.
 * */
const Todo = types
    .model('Todo', {
        id:          Date.now(),
        todo:        types.string,
        completed:   false,
        description: types.optional(types.string, ''),
        deadline:    types.optional(types.Date, new Date()),
        item:        types.optional(types.union(types.string, types.number), ''),
    });

const TodosStore = types
    .model('TodosStore', {
        todos: types.array(Todo),
    })
    .actions((self) => ({
        addTodo(todo) {
            self.todos.push({ id: Date.now(), todo, item: {} }); // item должен быть строкой или объектом
        },
    }));

export const todosStore = TodosStore.create({
    todos: [
        {
            todo: 'Посмотреть под микроскопом на MST',
            item: 0,
        },
    ],
});
