// const sum = (a, b, cb) => {
//     const result = a + b;
//
//     cb(result);
// };
//
// sum(1,2, (result) => {
//     console.log('LOG:', result);
// });
//
// sum(1,2, (result) => {
//     alert(result);
// });

import { ProductList, ProductView } from './components';

const Products = ({ render }) => {
    return (
        <section>
            { render([{ id: 1, name: 'React' }, { id: 2, name: 'TypeScript' }]) }
        </section>
    );
};

const Wrapper = () => {
    return (
        <>
            <Products render = { (products) => <ProductList products = { products } /> } />
            <hr />
            <Products render = { (products) => <ProductView products = { products } /> } />
        </>
    );
};

export default Wrapper;

