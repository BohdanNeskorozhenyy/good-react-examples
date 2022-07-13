const getUpperCasedName = (name: string): string => name.toUpperCase();

const Component = () => {
    return <>
        <h1>Преподаватель: { getUpperCasedName('Андрей') }</h1>
    </>;
}

export default Component;
