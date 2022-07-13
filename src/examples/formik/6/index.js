import { Formik, Field } from 'formik';

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const MyForm = () => {
    const initialValues = {
        email: '',
    };

    return (
        <Formik
            initialValues = { initialValues }
            validate = { validate }
            onSubmit = { (values) => {
                console.log(values);
            } }>
            { ({ errors, touched, handleSubmit }) => (
                <form onSubmit = { handleSubmit }>
                    <Field
                        type = 'text'
                        name = 'email' />
                    { errors.email && touched.email && <div>{ errors.email }</div> }
                    <button type = 'submit'>Submit</button>
                </form>
            ) }
        </Formik>
    );
};

export default MyForm;
