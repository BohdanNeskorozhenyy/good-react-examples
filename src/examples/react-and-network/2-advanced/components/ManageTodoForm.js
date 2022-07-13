/* Core */
import { useState, useEffect } from 'react';

export const ManageTodoForm = (props) => {
    const [values, setValues] = useState(props.initialValues);
    const [isFetching, setFetching] = useState(false);

    const setValue = (field, value) => setValues((old) => ({ ...old, [ field ]: value }));

    const submit = async (e) => {
        e.preventDefault();

        try {
            setFetching(true);
            await props.onSubmit(values);
        } finally {
            setFetching(false);

            if (props.title.toLowerCase().includes('создать')) {
                setValues(defaultFormValues);
            }
        }
    };

    useEffect(() => {
        setValues(props.initialValues);
    }, [props.initialValues]);

    if (values === null) {
        return null;
    }

    return (
        <form onSubmit = { submit }>
            <h3>{ props.title }</h3>

            <fieldset disabled = { isFetching }>
                <label htmlFor = 'title'>Заголовок</label>
                <input
                    type = 'text'
                    name = 'title'
                    value = { values.title }
                    onChange = { (e) => setValue('title', e.target.value) }
                    required />
                <br />

                <label htmlFor = 'body'>Описание</label>
                <textarea
                    type = 'text'
                    name = 'body'
                    value = { values.body }
                    onChange = { (e) => setValue('body', e.target.value) }
                    required />
                <br />

                <LoadingStatus />

                <input type = 'submit' value = 'Отправить' />
            </fieldset>
        </form>
    );
};

const defaultFormValues = {
    title: '',
    body:  '',
};

ManageTodoForm.defaultProps = {
    initialValues: defaultFormValues,
};

const LoadingStatus = (props) => {
    return (
        <div>
            { props.status === 'loading'
                ? 'Сохраняю...'
                : props.status === 'error'
                    ? 'Ошибка!'
                    : props.status === 'success'
                        ? 'Готово!'
                        : null }
        </div>
    );
};
