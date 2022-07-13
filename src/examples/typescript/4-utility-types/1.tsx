// Partial делает все свойства типа опциональными

type UserType = {
    name: string;
    age: number;
}

// const user: UserType = {};

// type UserType = {
//     name?: string;
//     age?: number;
// }
const user: Partial<UserType> = {};

user.name = 'Андрей';

const Component = () => {
    return (
        <>
            <h1>Пользователь {user.name}</h1>
        </>
    );
}

export default Component;
