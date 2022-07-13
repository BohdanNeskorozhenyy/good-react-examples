// Core
import {useState} from 'react';

// Components
import {
    Title, Form, Input, SubmitButton, ResetButton
} from './components';

/**
 * Стилизируемые компоненты подерживают анимации.
 *
 * Для этого из пакета 'styled-components' необходимо импортировать функцию 'keyframes'.
 * функция 'keyframes' возвращает специальный оъект, которы затем используется в качестве значения
 * CSS-свойства animate.
 *
 * Применение функции 'keyframes' в компоненте Input
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
