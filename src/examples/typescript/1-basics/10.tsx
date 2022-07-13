const Component = () => {
    // Объединение типов
    const getDataById = (id: string | number): string => {
        return `Данные по идентификатору: ${id}`;
    }

    return (
        <h1>{getDataById(1)}</h1>
    );
}

export default Component;
