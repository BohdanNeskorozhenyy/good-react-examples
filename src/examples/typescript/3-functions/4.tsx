// Тип возвращаемого значения
type UserType = {
    name: string;
    score: number;
}

// Тип функции
type UpperCasedNameFn = {
    version: number;
    (name: string, score?: number): UserType;
};

const getUpperCasedName: UpperCasedNameFn = (name, score) => ({
    name: name.toUpperCase(),
    score: typeof score === 'undefined'? 0 : score * 1.25,
});

getUpperCasedName.version = 1;

const user = getUpperCasedName('Андрей');

const Component = () => {
    return <>
        <h1>Преподаватель: { user.name }</h1>
        <p>Количество баллов: ${user.score}</p>
        <p>Версия: { getUpperCasedName.version }</p>
    </>;
}

export default Component;
