// Core
import {useState} from 'react';
import styled from 'styled-components';

// Components
import {
    Title, Form, Input, SubmitButton, ResetButton
} from './components';

const StyledResetButton = styled(ResetButton)`
    color: #fff;
    margin: 10px auto;
    background-color: var(--variable);
`;

/**
 * При помощи функции styled можно стилизировть любой из существующих пользовательских компонентов.
 *
 * Обратите внимание!
 * ResetButton — обычный пользовательский компонент.
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
                <StyledResetButton type='reset' title='Сбросить' />
            </div>
        </Form>
    )
};

export default LoginForm;
