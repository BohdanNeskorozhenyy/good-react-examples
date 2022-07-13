/* Instruments */
import { useForm } from './hooks';

const Form = () => {
    const { form, updateForm, resetForm } = useForm({
        email:           '',
        password:        '',
        confirmPassword: '',
    });

    const submitForm = (event) => {
        event.preventDefault();

        console.log(form);
        resetForm();
    };

    return (
        <form onSubmit = { submitForm } onReset = { resetForm }>
            <h1>Регистрация</h1>
            <input
                required
                name = 'email'
                type = 'email'
                onChange = { updateForm }
                placeholder = 'Электропочта'
                autoComplete = 'email'
                value = { form.email } />
            <input
                minLength = { 5 }
                autoComplete = 'new-password'
                name = 'password'
                type = 'password'
                onChange = { updateForm }
                placeholder = 'Пароль'
                value = { form.password } />
            <input
                minLength = { 5 }
                autoComplete = 'new-password'
                name = 'confirmPassword'
                type = 'password'
                onChange = { updateForm }
                placeholder = 'Подтвердите пароль'
                value = { form.confirmPassword } />

            <div className = 'controls'>
                <button type = 'submit'>Зарегистрироваться</button>
                <button type = 'reset'>Сбросить</button>
            </div>

            <code>
                <pre>{ JSON.stringify(form, null, 4) }</pre>
            </code>
        </form>
    );
};

export default Form;
