// Core
import {useState} from 'react';

// Components
import {
    Title, Form, Input, SubmitButton, ResetButton
} from './components';

/**
 * В каждом компоненте где используется функция styled можно добавить дополнительный пропсы или аттрибуты.
 * Например вынести какую-то статику, добавить дефолтные значения и многое другое.
 *
 * Применение демонстрируется в компоненте Input.
 *
 * Обратите внимание!
 * Если в функцию styled в качестве аргумента был передан стилизируемый компонента,
 * то метод attrs может переопределить свойства передаваемого комопнента если будут использованы
 * одни и те же свойства.
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
