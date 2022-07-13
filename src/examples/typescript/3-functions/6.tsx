// Расширение типа в generic function
type CheckLengthFn = <T extends { length: number }>(value: T) => number;

const getLength: CheckLengthFn = (value) => value.length;

const strLength = getLength('Андрей');
const arrayLength = getLength([1,2,3,4,5]);
const objectLength = getLength({ length: 2 });
// const arrayLength = getLength(1); // ошибка. число не имеет свойства length

const Component = () => {
    return <>
        <p>В имени Андрей {strLength} букв.</p>
        <p>Количество пройденных тестов: {arrayLength}</p>
    </>;
}

export default Component;
