// Базовый тип
type UpperCasedNameFn = (name: string) => string;

const getUpperCasedName: UpperCasedNameFn = (name) => name.toUpperCase();

const Component = () => {
    return <>
        <h1>Преподаватель: { getUpperCasedName('Андрей') }</h1>
    </>;
}

export default Component;
