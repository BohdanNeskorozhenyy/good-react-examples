export const saveToDb = (options = {}) => {
    return ({ getState, dispatch }) => (next) => (action) => {
        const url = options.url
            ? options.url
            : 'https://7d2c6bea9dc396cfe808ae7b218edf35.m.pipedream.net';

        fetch(url, {
            method:  'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(action),
        }).then(() => {
            throw new Error('Хьюстон у нас проблема.');
        }).catch(({ message }) => {
            console.error(message);
            next({ type: '@@MIDDLEWARE_ERROR', payload: message, error: true });
        });
    };
};
