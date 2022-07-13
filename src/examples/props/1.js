const Child = (props) => {
    console.log('props', props);

    return <h1>{ props.message }</h1>;
};

const Parent = (props) => {
    console.log('props Parent', props);

    return <Child message = { 'Hello' } />;
};

export default Parent;
