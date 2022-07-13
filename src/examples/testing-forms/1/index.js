/* Core */
import { useForm } from 'react-hook-form';

export const Form = ({ handleFormSubmit }) => {
    const form = useForm({
        defaultValues: {
            email:    '',
            password: '',
        },
    });

    const submitForm = form.handleSubmit((values) => {
        handleFormSubmit(values);
        form.reset();
    });

    return (
        <form onSubmit = { submitForm } onReset = { form.reset }>
            <h1>Логин</h1>

            <label>
                Электропочта { form.formState.errors.email && <span>*</span> }
                <input
                    type = 'email'
                    autoComplete = 'email'
                    { ...form.register('email', { required: true }) } />
            </label>

            <label>
                Пароль { form.formState.errors.password && <span>*</span> }
                <input
                    role = 'textbox'
                    type = 'password'
                    autoComplete = 'password'
                    { ...form.register('password', { required: true }) } />
            </label>

            <div className = 'controls'>
                <button type = 'submit'>Зарегистрироваться</button>
                <button type = 'reset'>Сбросить</button>
            </div>
        </form>
    );
};
