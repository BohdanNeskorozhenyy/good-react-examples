// Базовый тип
type UpperCasedNameFn = {
    version: number;
    getMeta?: () => string;
    (name: string): string;
};

const getUpperCasedName: UpperCasedNameFn = (name) => name.toUpperCase();
getUpperCasedName.version = 1;

const Component = () => {
    return <>
        <h1>Преподаватель: { getUpperCasedName('Андрей') }</h1>
        <p>Версия: { getUpperCasedName.version }</p>
    </>;
}

export default Component;
