/* Core */
import { render, createPortal } from 'react-dom';

const target = document.getElementById('root');

const portal = createPortal(<span>Welcome!</span>, document.getElementById('dark-mode-toggle'));

const Book = () => {
    return (
        <>
            <h1>A Book</h1>
            { portal }
        </>
    );
};

render(<Book />, target);
