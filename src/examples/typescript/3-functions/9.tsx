import {useEffect} from "react";

// any
// const log = (message: any): void => {
//     const upperCasedMessage = message.toUpperCase();
//
//     console.log(`[${new Date().toISOString()}]: ${upperCasedMessage}`);
// }

// unknown
const log = (message: unknown): void => {
    if (typeof message !== 'string') {
        throw new Error('аргумент функции log должен быть строкой');
    }

    const upperCasedMessage = message.toUpperCase();

    console.log(`[${new Date().toISOString()}]: ${upperCasedMessage}`);
}

const Component = () => {
    useEffect(() => {
        log('Реднер компонента — Component');
        // log(5);
    }, []);

    return <>
        <p>Преподаватель: Андрей</p>
    </>;
}

export default Component;
