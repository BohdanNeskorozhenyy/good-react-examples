type UserEntryType = [string, number];

const Component = () => {
    const userEntry: UserEntryType = ['Саша', 25];

    // Желательно указывать определяемое значение в функции
    // Это поможет сразу понять что мы вернули не тот тип
    // или забыли вернуть значение
    const checkAge = (age: number): boolean => {
        return age > 18;
    }

    return (
        <ul>
            {checkAge(userEntry[1])
                ? <li>Меня зовут {userEntry[0]} и мне {userEntry[1]} лет.</li>
                : <li>Нельзя отобразить информацию из-за возрастных ограничений.</li>
            }
        </ul>
    );
}

export default Component;
