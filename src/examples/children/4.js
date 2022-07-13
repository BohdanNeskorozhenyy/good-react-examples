const Child = (props) => {
    /**
     * props.children — это непрозрачная структура данных.
     * от англ. opaque data structure
     * Это означает, что в качестве children может быть что угодно:
     * - массив
     * - строка
     * - объект, содержащий React-элемент
     */

    console.log(props);
    console.log('→ Array.isArray(children)', Array.isArray(props.children));

    return props.children;
};

const Parent = () => {
    return (
        <Child>
            <p>Lorem</p>
            <p>ipsum</p>
            <p children = 'dolor' />
            <p children = 'sit amet!' />
        </Child>
    );
};

export default Parent;
