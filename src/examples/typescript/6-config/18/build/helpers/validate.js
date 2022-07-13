"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (n) => {
    if (typeof n !== 'number') {
        throw new Error('аргумент функции должен быть числом');
    }
};
exports.validate = validate;
