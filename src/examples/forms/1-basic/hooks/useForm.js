/* Core */
import { useState } from 'react';

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const updateForm = (event) => {
        event.persist();
        const { name, value } = event.target;

        setForm((prevForm) => {
            return {
                ...prevForm,
                [ name ]: value,
            };
        });
    };

    const resetForm = () => {
        setForm(initialState);
    };

    return {
        form,
        updateForm,
        resetForm,
    };
};
