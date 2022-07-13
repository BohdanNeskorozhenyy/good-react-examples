type UserEntryType = [string, number];

const Component = () => {
    const userEntry: UserEntryType = ['Саша', 25];

    if(userEntry.length) {
        userEntry[0] = 'Максим';
        // userEntry[1] = 'Максим';
    }

    return (
        <ul>
            <li>Меня зовут {userEntry[0]} и мне {userEntry[1]} лет.</li>
        </ul>
    );
}

export default Component;
