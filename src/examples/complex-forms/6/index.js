import { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import data from './form.json';

import { Input } from './Input';
import { getValidationSchema } from './getValidationSchema';

const MyForm = () => {
    const [form, setForm] = useState(data);
    const { current: initialValues } = useRef({});

    // Infinite loop
    // const initialValues = {};
    // data.forEach(({ name }) => initialValues[name] = '');

    useEffect(() => {
        form.forEach(({ name }) => initialValues[ name ] = '');
    }, [form, initialValues]);

    const validationSchema = getValidationSchema(form);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit(values) {
            console.log('onSubmit', values);
        },
    });

    useEffect(() => {
        if (formik.values.fullname === 'John' && !initialValues.hasOwnProperty('email')) {
            setForm((prevValues) => [
                ...prevValues, {
                    name:            'email',
                    label:           'Email',
                    type:            'email',
                    placeholder:     'Enter email',
                    validationRules: {
                        type: 'email',
                    },
                    required: true,
                },
            ]);
        } else if (formik.values.email && formik.values.email.includes('jdoe') && !initialValues.hasOwnProperty('remember')) {
            setForm((prevValues) => [
                ...prevValues, {
                    name:  'remember',
                    label: 'Remember me',
                    type:  'checkbox',
                },
            ]);
        }
    }, [formik.values, initialValues]);

    const elJSX = form.map((item, index) => <Input
        key = { index }
        { ...item }
        { ...formik }
        handleChange = { formik.setFieldValue } />);

    return (
        <form onSubmit = { formik.handleSubmit }>
            { elJSX }
            <button formNoValidate type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
