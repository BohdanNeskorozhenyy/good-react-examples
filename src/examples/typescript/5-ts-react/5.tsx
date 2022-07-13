import {FC, useState, ChangeEvent} from 'react';

// Компонент
const Greeting: FC = () => {
    const [name, setName] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    return <>
        <h1>Привет {name}!</h1>
        <input name="name" value={name} onChange={handleChange} />
    </>;
}

export default Greeting;
