// Тип возвращаемого значения
// Тип функции
type UpperCasedNameFn = <T>(names: T[]) => T[];

const getUpperCasedName: UpperCasedNameFn = (values) => values.sort((a,b) => a > b ? 1 : -1);

const tests = getUpperCasedName<number>([5, 6, 1, 10]);
const themes = getUpperCasedName<string>(['JS', 'React', 'TS', 'Node.js']);

const Component = () => {
    return <>
        <p>Выполненные тесты:</p>
        <ul>
            {tests.map((testId, index) => <li key={index}>Идентификатор теста: {testId}</li>)}
        </ul>
        <p>Необходимо повторить темы:</p>
        <ul>
            {themes.map((testId, index) => <li key={index}>Тема: {testId}</li>)}
        </ul>
    </>;
}

export default Component;
