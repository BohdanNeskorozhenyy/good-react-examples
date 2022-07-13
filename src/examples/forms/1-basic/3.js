/* Core */
import { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        email:    'test@email.com',
        password: '',
    });

    const updateForm = (event) => {
        setForm((prevState) => {
            return {
                ...prevState,
                [ event.target.name ]: event.target.value,
            };
        });
    };

    const submitForm = (event) => {
        event.preventDefault();

        console.log(form);
        setForm({ email: '', password: '' });
    };

    return (
        <form onSubmit = { submitForm }>
            <h1>Логин</h1>
            <input
                name = 'email'
                type = 'email'
                onChange = { updateForm }
                placeholder = 'Электропочта'
                autoComplete = 'email'
                value = { form.email } />
            <input
                // defaultValue="xxx" // только для неконтролируемых элементов
                minLength = { 5 }
                autoComplete = 'current-password'
                name = 'password'
                type = 'password'
                onChange = { updateForm }
                placeholder = 'Пароль'
                value = { form.password } />
            <button type = 'submit'>Войти</button>
        </form>
    );
};

export default Form;
