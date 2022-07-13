// Core
import {useState} from 'react';

// Components
import {
    Title, Form, Input, SubmitButton, ResetButton
} from './components';

/**
 * Библиотека stylis, которая используется под капотом в styled-components поддерживает scss-like синтаксис.
 *
 * Обратите внимание на компонент Title в котором реализовано анимированное подчёркивание.
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
            <Title>Lectrum</Title>
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
