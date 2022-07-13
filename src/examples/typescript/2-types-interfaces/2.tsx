// Базовый интерфейс
interface UserType {
    name: string
};

// Расширенные интерфейс
interface UserScoresType extends UserType {
    score: number
};

const Component = () => {
    const user1: UserType = { name: 'Джон' };
    const user2: UserScoresType = { name: 'Андрей', score: 100 };

    return <>
        <h1>Преподаватель: { user1.name }</h1>
        <p>Студент: {user2.name} набрал за тест {user2.score} баллов.</p>
    </>;
}

export default Component;
