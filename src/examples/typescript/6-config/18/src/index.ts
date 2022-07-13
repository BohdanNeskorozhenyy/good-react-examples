/*
    Запустить команду — `tsc --build ./18`
    указать свойству esModuleInterop значение false или true

    1. import * as moment from "moment" → const moment = require("moment")
    2. import moment from "moment" → const moment = require("moment").default

    Фиксить 2 проблемы:
    1. Изменяет поведение в компиляторе
    2. Фиксируется двумя новыми вспомогательными функциями, которые обеспечивают оболочку для обеспечения совместимости
    в результирующем JavaScript
*/

// Core
import { resolve } from 'path';

// Helpers
import { validate } from "helpers/validate";

// Constants
import * as numbers from "constants/numbers";

console.log(resolve());
console.log(validate(numbers.a))

export const concat = (a, b) => [...a, ...b];


