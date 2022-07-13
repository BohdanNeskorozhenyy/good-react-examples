const Child = (props) => {
    const profileJSX = props.visible
        ? `User name:
            ${props.firstName} ${props.lastName}`
        : 'Profile hidden';

    return <h1>{ profileJSX }</h1>;
};

const profile = {
    firstName: 'Hermione',
    lastName:  'Granger',
};

const Parent = () => {
    return (
        <>
            <Child visible { ...profile } />
            { /* <Child */ }
            { /*   visible = { false } */ }
            { /*   { ...profile } */ }
            { /* /> */ }
        </>
    );
};

export default Parent;
