/* Core */
import { render } from 'react-dom';

const UiKit = {
    Header() {
        return <h1>A Header.</h1>;
    },
    Content() {
        return <h2>A Content.</h2>;
    },
    Footer() {
        return <h3>A Footer.</h3>;
    },
};

render(
    <>
        <UiKit.Header />
        <UiKit.Content />
        <UiKit.Footer />
    </>,
    document.getElementById('root'),
);
