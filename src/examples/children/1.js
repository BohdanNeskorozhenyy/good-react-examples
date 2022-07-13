const Child = (props) => {
    console.log(props);
    console.log(typeof props.children);

    return <h1>{ props.children }</h1>;
};

const Parent = () => {
    return <Child>Avada kedavra!</Child>;
};

export default Parent;
