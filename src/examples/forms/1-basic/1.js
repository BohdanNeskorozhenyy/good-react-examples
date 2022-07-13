/* Core */
import { useRef, useEffect } from 'react';

const Form = () => {
    const nameInputRef = useRef();

    const submitForm = (event) => {
        event.preventDefault();
        console.log(`Форма отправлена: ${nameInputRef.current.value}`);
        nameInputRef.current.value = '';
    };

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    console.log('🖥 Рендер.');

    return (
        <form onSubmit = { submitForm }>
            <input
                type = 'text' placeholder = 'Ваше имя...'
                ref = { nameInputRef } />
            <button type = 'submit'>Отправить</button>
        </form>
    );
};

export default Form;
