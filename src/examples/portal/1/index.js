import { Portal } from './components/portal';

const Greeting = () => {
    return (
        <>
            <h1>Привет друзья!</h1>
            <Portal>
                <p>Привет из портала.</p>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                    <li>User 4</li>
                    <li>User 5</li>
                </ul>
            </Portal>
        </>
    );
};

export default Greeting;
