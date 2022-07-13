type UserType = { first: string; last: string };

const Component = () => {
    // Дефолтные значения параметров функций определяют тип параметра
    const getUserGreeting = (user: UserType): string => {
        return `${user.first.toUpperCase()} ${user.last.toUpperCase()}`;
    }

    return (
        <h1>Приветствуем тебя { getUserGreeting({ first: 'Джон', last: 'Доу' }) }!</h1>
    );
}

export default Component;
