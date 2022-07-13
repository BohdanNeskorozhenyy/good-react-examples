// Базовый тип
interface UserType {
    getName: () => string;
};

class User implements UserType {
    private readonly name: string;

    constructor({ name }: { name: string }) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

const Component = () => {
    const user2: UserType = new User({ name: 'Андрей' });

    return <>
        <p>Студент: {user2.getName}.</p>
    </>;
}

export default Component;
