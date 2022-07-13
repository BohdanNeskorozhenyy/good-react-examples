// Базовый тип
interface UserType<T> {
    getName: () => T;
};

class User implements UserType<string> {
    private readonly name: string;

    constructor({ name }: { name: string }) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

const Component = () => {
    const user2: UserType<string> = new User({ name: 'Андрей' });

    return <>
        <p>Студент: {user2.getName}.</p>
    </>;
}

export default Component;
