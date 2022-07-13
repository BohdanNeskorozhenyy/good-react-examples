/*
    Запустить команду — `tsc --build ./6`
    указать свойству jsx значение — react, preserve или react-jsx
    это приведёт к тому что typescript по возможности будет проверять типы в JS файлах
*/

import React from 'react';

export const Component = () => {
    return <h1>Hello Lectrum</h1>;
}
