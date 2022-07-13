import { Formik } from 'formik';

const MyForm = () => {
    const initialValues = {
        username: '',
    };

    return (
        <Formik
            initialValues = { initialValues }
            onSubmit = { (values) => {
                console.log('submit');
                console.log(values);
            } }>
            { (props) => {
                console.log(props);

                return (
                    <form onSubmit = { props.handleSubmit }>
                        <input
                            type = 'text'
                            onChange = { props.handleChange }
                            onBlur = { props.handleBlur }
                            value = { props.values.username }
                            name = 'username' />
                        <button type = 'submit'>Submit</button>
                    </form>
                );
            } }
        </Formik>
    );
};

export default MyForm;
