/*
    Запустить команду — `tsc --build ./17`
    указать свойству paths значения для правильного резолва директорий
    это своство поможет более удобно прописывать пути к импортируемым файлам

    Обратите внимание, что эти свойства относятся только к TS.
    Для работы с Node.js вам потребуется использовать библиотеку https://www.npmjs.com/package/module-alias
    А для сборки под браузер потребуется должным образом конфигурировать Webpack

    // webpack.config.js
    module.exports = {
        resolve: {
            ...
            modules: [
                ...
            ]
        }
    }
*/

// Core
import { resolve } from 'path';

// Helpers
import { validate } from "app/validate";

// Constants
import { a } from "constants/numbers";

console.log(resolve());
console.log(validate(a))

export const concat = (a, b) => [...a, ...b];


