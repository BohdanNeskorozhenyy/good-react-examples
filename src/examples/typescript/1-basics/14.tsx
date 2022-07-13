import {useEffect, useState} from "react";

const Component = () => {
    const [ user ] = useState({});

    useEffect(() => {
        // Утверждаем что объект пользователя является объектом с полями name и age
        const person = user as { name: string; age: number };
        // const person = user;

        console.log(person.name);
    }, [user]);

    return <p>Утверждения типа</p>;
}

export default Component;
