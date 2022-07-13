import { useState, useEffect } from 'react';
import { useFormik } from 'formik';

const MyForm = () => {
    const [initialValues, setInitialValues] = useState({
        fname: '',
        lname: '',
        email: '',
    });

    console.log('initialValues', initialValues);

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    useEffect(() => {
        setTimeout(() => {
            console.log('set new value after 2 seconds');

            setInitialValues({
                fname: 'John',
                lname: 'Dou',
                email: 'jdou@email.com',
            });
        }, 2000);
    }, []);

    return (
        <form onSubmit = { formik.handleSubmit }>
            <input
                type = 'text'
                placeholder = 'First name'
                onChange = { formik.handleChange }
                value = { formik.values.fname }
                name = 'fname' />
            <input
                type = 'text'
                placeholder = 'Last name'
                onChange = { formik.handleChange }
                value = { formik.values.lname }
                name = 'lname' />
            <input
                type = 'email'
                placeholder = 'Email'
                onChange = { formik.handleChange }
                value = { formik.values.email }
                name = 'email' />
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
