type UserType = { first: string; last?: string };

const Component = () => {
    // Необязательные свойства объекта или параметры функций
    const getUserGreeting = (user: UserType): string => {
        if (typeof user.last === 'string') {
            return `${user.first.toUpperCase()} ${user.last.toUpperCase()}`;
        }

        return `${user.first.toUpperCase()}`;
    }

    return (
        <h1>Приветствуем тебя { getUserGreeting({ first: 'Джон' }) }!</h1>
    );
}

export default Component;
