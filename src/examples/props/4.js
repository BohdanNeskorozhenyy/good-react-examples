const Child = (props) => {
    return (
        <footer>
            <h1>
                Сейчас <code>{ props.year }</code> год.
            </h1>
        </footer>
    );
};

const year = new Date().getFullYear();

const Parent = () => {
    return <Child year = { year } />;
};

export default Parent;
