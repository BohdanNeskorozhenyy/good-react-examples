type Point = { x: number; y: number };

// Оператор keyof формирует тип на основании ключей
type Coordinate = keyof Point;

const Component = () => {
    const axis: Coordinate = "x";

    return <h1>Ось: {axis}</h1>;
};

export default Component;
