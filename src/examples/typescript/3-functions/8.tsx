import {useEffect} from "react";

// void
const log = (message: string): void => {
    console.log(`[${new Date().toISOString()}]: ${message}`);
}

// undefined
// const log = (message: string): undefined => {
//     console.log(`[${new Date().toISOString()}]: ${message}`);
//
//     return;
// }

const Component = () => {
    useEffect(() => {
        log('Реднер компонента — Component');
    }, []);

    return <>
        <p>Преподаватель: Андрей</p>
    </>;
}

export default Component;
