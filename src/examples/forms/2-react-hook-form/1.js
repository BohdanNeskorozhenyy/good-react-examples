/* Core */
import { useForm } from 'react-hook-form';

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email:    '',
            password: '',
        },
    });

    const submitForm = handleSubmit((values) => {
        console.log(values);
    });

    console.log('🖥 Рендер.');

    return (
        <form onSubmit = { submitForm }>
            <h1>Логин</h1>

            <input
                type = 'email'
                placeholder = 'Электропочта'
                autoComplete = 'email'
                { ...register('email', { required: true }) } />
            { errors.email && <span>Обязательно к заполнению</span> }

            <input
                type = 'password'
                placeholder = 'Пароль'
                autoComplete = 'current-password'
                { ...register('password', { required: true }) } />
            { errors.password && <span>Обязательно к заполнению</span> }

            <button type = 'submit'>Войти</button>
        </form>
    );
};

export default Form;
