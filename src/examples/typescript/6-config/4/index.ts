/*
    Запустить команду — `tsc --build ./4`
    указать свойству allowJs значение — true или false
    это приведёт к тому что в билд попадут заипортированные JS файлы в первом случае
    и не попадут во втором
*/

import { greeting } from './source';

console.log(greeting);
