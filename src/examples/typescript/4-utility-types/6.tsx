// ReturnType создаёт новый тип на основании того что возвращает переданный тип

type UserTypeFn = () => {
    name: string;
    age: number;
}

const user: ReturnType<UserTypeFn> = {
    name: 'Андрей',
    age: 30
};

const Component = () => {
    return (
        <>
            <h1>Пользователь {user.name}</h1>
        </>
    );
}

export default Component;
