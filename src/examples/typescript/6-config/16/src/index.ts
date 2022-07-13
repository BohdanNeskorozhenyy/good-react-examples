/*
    Запустить команду — `tsc --build ./16`
    указать свойству baseUrl значение ./src
    это свойство опеределяет где TypeScript будет искать модули без указания абсолютного пути
*/
// Core
import { resolve } from 'path';

// Helpers
import { validate } from "helpers/validate";

console.log(resolve());
console.log(validate(5))

export const concat = (a, b) => [...a, ...b];


