/* Core */
import { render } from 'react-dom';

const H2 = () => {
    return <p>...were traveling through the galactic environment.</p>;
};

const Book = () => {
    return (
        <>
            <h1>In the period of civil war, Rebel spaceships...</h1>

            <H2 />
        </>
    );
};

render(<Book />, document.getElementById('root'));
