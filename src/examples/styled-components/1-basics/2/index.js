// Components
import { Title, Form, Input } from './components';

/**
 * Компоненты созданные при помощи библиотеки styled-components
 * могут пробрасывать аттрибуты HTML компонентам.
 * Но пробрасываться будут только валидные аттрибуты.
 * */
const LoginForm = () => {
    return (
        <Form>
            <Title>Логин</Title>
            <Input placeholder='Имя пользователя' />
            <Input placeholder='Пароль' type='password' />
        </Form>
    )
};

export default LoginForm;
