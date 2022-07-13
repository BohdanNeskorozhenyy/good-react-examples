import { Formik, Field } from 'formik';

const MyForm = () => {
    const initialValues = {
        name:  '',
        color: '',
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
                    <Field as = 'select' name = 'color'>
                        <option value = 'red'>Red</option>
                        <option value = 'green'>Green</option>
                        <option value = 'blue'>Blue</option>
                    </Field>
                    <button type = 'submit'>Submit</button>
                </form>
            ) }
        </Formik>
    );
};

export default MyForm;
