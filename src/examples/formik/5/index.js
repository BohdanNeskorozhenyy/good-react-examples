import { Formik, Field } from 'formik';

const validateName = (value) => {
    let error;

    if (value === 'admin') {
        error = 'Nice try!';
    }

    return error;
};

const MyForm = () => {
    const initialValues = {
        name: '',
    };

    return (
        <Formik
            initialValues = { initialValues }
            onSubmit = { (values) => {
                console.log(values);
            } }>
            { ({ errors, touched, handleSubmit }) => {
                console.log('errors', errors);
                console.log('touched', touched);

                return (
                    <form onSubmit = { handleSubmit }>
                        <Field
                            type = 'text'
                            validate = { validateName }
                            name = 'name' />
                        { errors.name && touched.name && (
                            <div>{ errors.name }</div>
                        ) }
                        <button type = 'submit'>Submit</button>
                    </form>
                );
            } }
        </Formik>
    );
};

export default MyForm;
