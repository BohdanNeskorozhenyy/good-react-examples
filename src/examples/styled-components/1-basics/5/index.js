// Core
import {useState} from 'react';

// Components
import {
    Title, Form, Input, SubmitButton, ResetButton
} from './components';

/**
 * Можно явно указывать какой элемент мы хотим отрендерить.
 *
 * Для этого необходимо использовать prop — as.
 * Не забывайте что вам так же может потребоваться добавить нужные аттрибуты,
 * для того что бы элемент был валидным. Как в случае с 'a' тегом.
 *
 * В пропс 'a' так же можно передать и пользовательские компоненты.
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
                <ResetButton as='a' href='https://lectrum.io/course/react-redux' target='_blank'>Зарегистрироваться</ResetButton>
            </div>
        </Form>
    )
};

export default LoginForm;
