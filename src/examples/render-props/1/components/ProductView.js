export const ProductView = ({ products }) => {
    return (
        <div>
            { products.map(({ id, name }) => <p key = { id }>{ name }</p>) }
        </div>
    );
};
