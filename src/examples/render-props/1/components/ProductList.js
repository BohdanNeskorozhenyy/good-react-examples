export const ProductList = ({ products }) => {
    return (
        <ul>
            { products.map(({ id, name }) => <li key = { id }>{ name }</li>) }
        </ul>
    );
};
