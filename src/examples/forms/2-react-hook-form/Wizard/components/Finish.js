/* Instruments */
import { options } from '../lib';

export const Finish = (props) => {
    const values = props.form.getValues();

    const product = options.find((product) => product.value === values.product)
        .name;

    return (
        <section>
            <h1>Ваш заказ готов</h1>
            <p>
                Имя:{ ' ' }
                <b>
                    { values.firstName } { values.lastName }
                </b>
            </p>
            <p>
                Почта: <b>{ values.email }</b>
            </p>
            <p>
                Телефон: <b>{ values.phone }</b>
            </p>
            <p>
                Продукт: <b>{ product }</b>
            </p>
            <button type = 'reset'>Собрать новый</button>
        </section>
    );
};
