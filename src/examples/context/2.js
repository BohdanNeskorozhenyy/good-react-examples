/* Core */
import { createContext, useContext } from 'react';

/* Instruments */
import { data } from './data';

const Context = createContext();

const Library = () => {
    return <Room />;
};

const Room = () => {
    return <Bookshelf />;
};

const Bookshelf = () => {
    return <Book />;
};

const Book = () => {
    return <Page />;
};

const Page = () => {
    const context = useContext(Context);

    console.log('context', context);

    return (
        <>
            <h1>{ context.title }</h1>
            <p>
                Page: <code>{ context.page }</code>
            </p>
        </>
    );
};

const Wrapper = () => {
    return (
        <Context.Provider value = { data }>
            <Library />
        </Context.Provider>
    );
};

export default Wrapper;
