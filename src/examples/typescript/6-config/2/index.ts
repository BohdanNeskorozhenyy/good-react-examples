/*
    Запустить команду — `tsc -p ./2`
    указать свойству module значение — commonjs или esnext
    это приведёт к изменениям в файле index.js
*/

import { resolve } from 'path';

const pathToFile = resolve();
