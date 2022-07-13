/*
    Запустить команду — `tsc --build ./7`
    указать свойствам declaration и declarationMap значение — true или false
    свойство declaration определяет необходимость генераци d.ts файлов
    свойство declarationMap мапит d.ts файл к оригинальному .ts файлу
*/

// index.d.ts
// index.js
const sum = (a: number, b: number): number => a + b;
