// Алиас типа
type ID = string | number;

const Component = () => {
    // Если возникает необходимость использовать специфические для типа методы,
    // при использовании union types, нам потребуется написать проверку на тип.
    const getDataById = (id: ID): string => {
        let identifier = id;

        if (typeof id === 'string') {
            identifier = id.toUpperCase();
        }

        return `Данные по идентификатору: ${identifier}`;
    }

    return (
        <h1>{getDataById('1a2v')}</h1>
    );
}

export default Component;
