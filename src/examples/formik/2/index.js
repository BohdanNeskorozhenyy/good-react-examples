import { Formik, Field } from 'formik';

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
            { (props) => (
                <form onSubmit = { props.handleSubmit }>
                    <Field
                        type = 'text' name = 'name'
                        placeholder = 'Type your name here...' />
                    <button type = 'submit'>Submit</button>
                </form>
            ) }
        </Formik>
    );
};

export default MyForm;
