const Component = (props: { title: string }) => {
    const { title } = props;
    let greeting = title;

    if(new Date().getHours() > 21) {
        greeting = 'До завтра Лектрум!';
        // greeting = 5; // ошибка
    }

    return <h1>{ greeting }</h1>;
}

const Parent = () => {
    return <Component title = "Привет Лектрум!" />
}

// props = { title: "Привет Лектрум!" }

export default Parent;
