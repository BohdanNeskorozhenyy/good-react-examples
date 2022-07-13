const Component = () => {
    let greeting = 'Привет Лектрум!'; // type inference
    const time: number = 19;
    const isClosed = new Date().getHours() > 21;

    if(isClosed) {
        greeting = 'До завтра Лектрум!';
        // greeting = 5; // ошибка
    }

    return <>
        <h1>{ greeting }</h1>
        <p>Мы работаем до: {time} по Киеву.</p>
    </>;
}

export default Component;
