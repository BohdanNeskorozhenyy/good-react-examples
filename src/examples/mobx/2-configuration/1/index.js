// Core
import { configure } from 'mobx';

/*
* Версии
* 4 — для старый окружений
* 5 — для современных окружений
* 6 — поддерживает оба окружения, но в некоторых случая требует полифилы
* */

/*
* Обычно стоит отключать только в слачаях разработки под IE или React Native без
* движока Hermes (https://hermesengine.dev/)
* */
configure({
    useProxies: 'never', // always | never | ifavailable (эксперементальная фича)
});

const Todo = () => {
    return <h1>Отключаем JS Proxy</h1>;
};

export default Todo;

/// /////////////////
// let numbers = [0, 1, 2];
//
// numbers = new Proxy(numbers, {
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop];
//         } else {
//             return 0; // значение по умолчанию
//         }
//     }
// });
//
// console.log('Доступ к существующему элементу', numbers[1]); // 1
// console.log('Доступ к несуществующему элементу', numbers[777]); // 0
