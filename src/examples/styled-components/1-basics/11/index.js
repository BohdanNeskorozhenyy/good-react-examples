// Core
import {useState} from 'react';

// Components
import {
    Title, Form, Input, SubmitButton, ResetButton
} from './components';

/**
 * Набор CSS свойств можно передавать и в виде объекта.
 * Обратите внимание на компонент — SubmitButton.
 *
 * Такой подход рекомендуется использовать если требуется перевести существующие объекты
 * со стилями на библиотеку styled-components.
 * Классический подход — использование шаблонных строк для описания стилей.
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
            <Input placeholder='Пароль' type='password' margin='20px 0 10px' />
            <div>
                <SubmitButton type='submit'>Войти</SubmitButton>
                <ResetButton type='reset'>Сбросить</ResetButton>
            </div>
        </Form>
    )
};

export default LoginForm;
