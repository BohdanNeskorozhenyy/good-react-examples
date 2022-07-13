// Core
import {useState} from 'react';

// Components
import {
    Title, Form, Input, SubmitButton, ResetButton
} from './components';

/**
 * Стили можно наследовать.
 *
 * Для этого в качестве аргуента функции style необходимо передать компонент
 * от которого мы хотим унаследовать стили.
 *
 * Унаследованные стили можно переопределить или же дописать новые.
 * */
const LoginForm = () => {
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const { value } = event.target;

        if (value && value.length < 5) {
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <Form>
            <Title>Логин</Title>
            <Input placeholder='Имя пользователя' error={error} onChange={handleChange} />
            <Input placeholder='Пароль' type='password' />
            <div>
                <SubmitButton type='submit'>Войти</SubmitButton>
                <ResetButton type='reset'>Сбросить</ResetButton>
            </div>
        </Form>
    )
};

export default LoginForm;
