// const user: {
//     name?: string | null
// } = {
//     // name: null,
// };

type UserType = { [key: string]: string | null };

const user: UserType = {};

user.name = 'Андрей';
// user.age = 25;

const Component = () => {
    return (
        <>
            <h1>Пользователь {user.name}</h1>
        </>
    );
}

export default Component;
