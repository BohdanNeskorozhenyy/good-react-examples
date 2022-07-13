const Child = (props) => {
    console.log(props);

    return <h1>{ props.children }</h1>;
};

const Parent = () => {
    return <Child children = 'Avada kedavra!' />;
    // return <Child children="Avada kedavra!">Avada kedavra!!!</Child>;
};

export default Parent;
