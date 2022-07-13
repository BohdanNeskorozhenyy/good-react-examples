/* Core */
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
    return <h1>Home</h1>;
};

const _404 = () => {
    return (
        <>
            <h1>404: Not Found 👽</h1>
            <Link to = '/'>Back to Home!</Link>
        </>
    );
};

const Example = () => {
    return (
        <>
            <nav>
                <Link to = '/'>Home</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/contacts'>Contacts</Link>
            </nav>

            <Routes>
                <Route path = '/' element = { <Home /> } />
                <Route path = '/about' element = { <h1>About</h1> } />
                <Route path = '/contacts' element = { <h1>Contacts</h1> } />

                { /* Display 404 if no route match found. */ }
                <Route path = '*' element = { <_404 /> } />
            </Routes>
        </>
    );
};

export default Example;
