// Components
import { Title, Form } from './components';

/**
 * Создаём стилизорованные элементы.
 *
 * Обратите внимание что на элементы созданные при помощи библиотеки styled-components
 * будут оказывать влияние глобальные стили которые могут быть добавлены при помощи классического css
 * или препроцессоров SASS, LESS.
 * */
const LoginForm = () => {
    return (
        <Form>
            <Title>Логин</Title>
        </Form>
    )
};

export default LoginForm;
