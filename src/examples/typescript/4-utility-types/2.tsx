// Required делает все свойства типа обязательными

type UserType = {
    name?: string;
    age?: number;
}

// const user: UserType = {};
const user: Required<UserType> = {
    name: 'Андрей',
    age: 30
};

user.name = 'Андрей';

const Component = () => {
    return (
        <>
            <h1>Пользователь {user.name}</h1>
        </>
    );
}

export default Component;
