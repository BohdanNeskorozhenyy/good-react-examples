// Literal Types
type Links = 'https://example.com/dev/profile' | 'https://example.com/prod/profile';

const Component = () => {
    // Тип → string
    let fName = 'Джон';

    // Тип → Доу
    const lName = 'Доу';

    // Тип → 'https://example.com/dev/profile' | 'https://example.com/prod/profile'
    const link: Links = 'https://example.com/dev/profile';

    return (
        <>
            <h1>Пользователь</h1>
            <p>Профиль: <a href={link}>{fName} {lName}</a></p>
        </>
    );
}

export default Component;
