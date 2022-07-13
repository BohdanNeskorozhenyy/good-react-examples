/* Core */
import { useState } from 'react';
import waait from 'waait';

/* Instruments */
import { useForm } from './hooks';

const Form = () => {
    const [isFetching, setFetching] = useState(false);
    const { form, updateForm, resetForm } = useForm({
        email:           '',
        password:        '',
        confirmPassword: '',
    });

    const submitForm = async (event) => {
        event.preventDefault();
        setFetching(true);

        console.log(form);

        await waait(2000);

        resetForm();
        setFetching(false);
    };

    return (
        <form onSubmit = { submitForm } onReset = { resetForm }>
            <h1>Регистрация</h1>

            <fieldset disabled = { isFetching }>
                <legend>Ваши данные</legend>
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
            </fieldset>
        </form>
    );
};

export default Form;
