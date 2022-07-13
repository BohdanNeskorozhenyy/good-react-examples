/* Components */
import { Input } from '../../components';

export const Step1 = (props) => {
    return (
        <>
            <h1>Ваши контактные данные</h1>

            <Input
                label = 'Электропочта'
                error = { props.form.formState.errors.email }
                type = 'email'
                autoComplete = 'email'
                register = { props.form.register('email') } />
            <Input
                label = 'Телефон'
                error = { props.form.formState.errors.phone }
                type = 'phone'
                autoComplete = 'tel'
                register = { props.form.register('phone') } />
        </>
    );
};
