/* Components */
import { Input } from '../../components';

export const Step2 = (props) => {
    return (
        <>
            <h1>Ваше имя</h1>

            <Input
                label = 'Имя'
                error = { props.form.formState.errors.firstName }
                register = { props.form.register('firstName') } />
            <Input
                label = 'Фамилия'
                error = { props.form.formState.errors.lastName }
                register = { props.form.register('lastName') } />
        </>
    );
};
