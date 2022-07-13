import { hoc } from './hoc';

const Greeting = ({ msg }) => {
    return (
        <>
            <h1>Привет друзья!</h1>
            <p>{ msg }</p>
        </>
    );
};

export default hoc(Greeting);
