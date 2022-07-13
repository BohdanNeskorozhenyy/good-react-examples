/*
    Запускать пример не нужно
    указать свойству isolatedModules значение — true или false
    это свойство требует что бы каждый файл был модулем (имел import/export) в случае указания значения true
*/

export const concat = (a: number[], b: number[]): number[] => [...a, ...b];

