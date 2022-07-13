import { useState } from 'react';

export const Submit = ({ formData }) => {
    const [values, setValues] = useState(null);

    return (
        <div>
            <h3>Спасибо что заполнили форму!</h3>
            <pre>{ values && JSON.stringify(values, null, 4) }</pre>
            <button className = 'next-btn' onClick = { () => setValues(formData) }>Распечатать результат</button>
        </div>
    );
};
