// Базовый тип
type UserType = {
    name: string
};

// ошибка
// type UserType = {
//     score: number
// };

const Component = () => {
    const user2: UserType = { name: 'Андрей' };

    return <>
        <p>Студент: {user2.name}.</p>
    </>;
}

export default Component;
