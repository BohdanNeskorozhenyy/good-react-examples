// Pick извлекает из типа перечисленные свойства и создаёт новый тип

type UserType = {
    name: string;
    age: number;
    score?: number;
}

const user: Pick<UserType, 'name' | 'score'> = {
    name: 'Андрей',
    // age: 30 // ошибка
};

const Component = () => {
    return (
        <>
            <h1>Пользователь {user.name}</h1>
        </>
    );
}

export default Component;
