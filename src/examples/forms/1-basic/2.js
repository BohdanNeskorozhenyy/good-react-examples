/* Core */
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');

    const updateName = (event) => {
        setName(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();

        const minChars = 3;

        if (name.length < minChars) {
            alert(`Минимальная длина поля «Имя» — ${minChars} символа`);

            return null;
        }
        console.log(`Форма отправлена: ${name}`);
        setName('');
    };

    console.log('🖥 Рендер.');

    return (
        <form onSubmit = { submitForm }>
            <input
                type = 'text'
                placeholder = 'Ваше имя...'
                value = { name }
                onChange = { updateName } />
            <button type = 'submit'>Отправить</button>
        </form>
    );
};

export default Form;
