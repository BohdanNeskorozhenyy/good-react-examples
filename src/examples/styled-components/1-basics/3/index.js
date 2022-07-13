// Core
import {useState} from 'react';

// Components
import { Title, Form, Input } from './components';

/**
 * Переданные props в компоненты созданные при помощи библиотеки styled-components
 * будут доступны для стилизации.
 *
 * Исходя из переданных props можно менять свойства CSS.
 * Данный функционал работает из коробки и не требует дополнительных настроек.
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
        </Form>
    )
};

export default LoginForm;
