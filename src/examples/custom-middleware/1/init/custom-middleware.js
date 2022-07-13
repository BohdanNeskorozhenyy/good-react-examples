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
            return next({ ...action, meta: 'saved to db' });
        });
    };
};
/// ////////////////////////
// const func = ({ getState, dispatch }) => (next) => (action) => {
//     next(action);
// }
