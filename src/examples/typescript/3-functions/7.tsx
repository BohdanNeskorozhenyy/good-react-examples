// Перегрузка функций
function getString(str: string): string;
function getString(value: string, num: number): string;

function getString(str: string, num?: number): string {
    if (typeof num === 'number') {
        return `${str.slice(0, num)}...`;
    }

    return str.toUpperCase();
}

const Component = () => {
    return <>
        <p>Преподаватель: {getString('Андрей')}</p>
        <p>Усечённая строка: {getString('Слишко длинные строки лучше обераз и добавлять троеточие', 10)}</p>
    </>;
}

export default Component;


new Date()
