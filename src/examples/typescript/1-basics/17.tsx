// Literal Types
enum Roles {
    ADMIN,
    REGULAR,
};

const Component = () => {
    const role: Roles = Roles.ADMIN; // after compile const role = 0;

    return (
        <>
            <h1>Пользователь</h1>
            <p>Роль: {role}</p>
        </>
    );
}

export default Component;
