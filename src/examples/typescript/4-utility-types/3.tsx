// Readonly делает все свойства доступными только для чтения

type UserType = {
    name: string;
    age: number;
}

const user: Readonly<UserType> = {
    name: 'Андрей',
    age: 30
};

// user.name = 'Андрей'; // ошибка

const Component = () => {
    return (
        <>
            <h1>Пользователь {user.name}</h1>
        </>
    );
}

export default Component;
