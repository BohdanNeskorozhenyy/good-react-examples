import { Formik, useField } from 'formik';

const Field = (props) => {
    const [field, meta] = useField(props);
    console.log('field', field);
    console.log('meta', meta);

    return (
        <>
            <input { ...field } { ...props } />
            { meta.error && meta.touched && <div>{ meta.error }</div> }
        </>
    );
};

const MyForm = () => {
    const initialValues = {
        email: '',
    };

    return (
        <Formik
            initialValues = { initialValues }
            onSubmit = { (values) => {
                console.log(values);
            } }>
            { (props) => (
                <form onSubmit = { props.handleSubmit }>
                    <Field
                        type = 'email' name = 'email'
                        placeholder = 'Type your email here...' />
                    <button type = 'submit'>Submit</button>
                </form>
            ) }
        </Formik>
    );
};

export default MyForm;
