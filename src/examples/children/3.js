const Child = (props) => {
    console.log(props);

    return <h1>{ props.children.toUpperCase() }</h1>;
};

const Parent = () => {
    return <Child>{ 'Avada kedavra!' }</Child>;
};

export default Parent;
