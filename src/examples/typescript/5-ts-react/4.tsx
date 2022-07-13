import {FC, useState, useEffect} from 'react';

// Компонент
const Greeting: FC = () => {
    // const [name, setName] = useState();
    const [name, setName] = useState<string>();

    useEffect(() => {
        setName('Андрей');
    }, []);

    return <h1>Привет {name}!</h1>;
}

export default Greeting;
