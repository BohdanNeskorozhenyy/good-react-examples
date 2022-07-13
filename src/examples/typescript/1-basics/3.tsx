const Component = () => {
    const users: string[] = ['Саша', 'Андрей'];
    // const users: Array<string> = ['Саша', 'Андрей'];

    if(users.length === 2) {
        users.push('Максим');
        // users.push(10);
    }

    return (
        <ul>
            {users.map((user) => <li>{user}</li>)}
        </ul>
    );
}

export default Component;
