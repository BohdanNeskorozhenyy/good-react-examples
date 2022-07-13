// Базовый интерфейс
interface UserType {
    name: string;
};

// Расширение базового интерфейса
interface UserType {
    score: number;
};

const Component = () => {
    const user2: UserType = { name: 'Андрей', score: 90 };

    return <>
        <p>Студент: {user2.name} набрал за тест {user2.score} баллов.</p>
    </>;
}

export default Component;
