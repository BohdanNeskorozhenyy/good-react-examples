// Omit убирает из типа перечисленные свойства и создаёт новый тип

type UserType = {
    name: string;
    age: number;
}

const user: Omit<UserType, 'name'> = {
    // name: 'Андрей', // ошибка
    age: 30
};

const Component = () => {
    return (
        <>
            <h1>Возраст пользователя {user.age}</h1>
        </>
    );
}

export default Component;
