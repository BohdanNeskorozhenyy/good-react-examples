export const validate = (n): void => {
    if (typeof n !== 'number') {
        throw new Error('аргумент функции должен быть числом');
    }
}
