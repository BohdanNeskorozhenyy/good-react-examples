import { Formik, Field } from 'formik';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validate = (values) => {
    return sleep(2000).then(() => {
        const errors = {};
        if (['admin', 'root'].includes(values.name)) {
            errors.name = 'Blocked!!!';
        }

        return errors;
    });
};

const MyForm = () => {
    const initialValues = {
        name: '',
    };

    return (
        <Formik
            initialValues = { initialValues }
            validate = { validate }
            onSubmit = { (values) => {
                console.log(values);
            } }>
            { ({
                isValidating, errors, touched, handleSubmit,
            }) => (
                <form onSubmit = { handleSubmit }>
                    <Field
                        type = 'text'
                        name = 'name' />
                    { errors.name && touched.name && <div>{ errors.name }</div> }
                    <button disabled = { isValidating } type = 'submit'>Submit</button>
                </form>
            ) }
        </Formik>
    );
};

export default MyForm;
