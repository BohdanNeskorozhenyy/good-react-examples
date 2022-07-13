/* Components */
import { Select } from '../../components';

/* Instruments */
import { options } from '../lib';

export const Step3 = (props) => {
    const errors = !!Object.keys(props.form.formState.errors).length;

    return (
        <>
            <h1>Выберите товар</h1>

            <Select
                label = 'Продукт'
                error = { props.form.formState.errors.product }
                register = { props.form.register('product') }
                options = { options } />
            <button disabled = { errors } type = 'submit'>
                Готово!
            </button>
        </>
    );
};
