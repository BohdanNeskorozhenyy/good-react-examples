import { Formik } from 'formik';

// Custom input
import { Input } from './Input';

const MyForm = () => {
    const initialValues = {
        username: '',
    };

    const validate = (value) => {
        if (value.username !== 'John') {
            return {
                username: 'invalid username',
            };
        }
    };

    return (
        <Formik
            initialValues = { initialValues }
            validate = { validate }
            onSubmit = { (values) => {
                console.log(values);
            } }>
            { (props) => (
                <form onSubmit = { props.handleSubmit }>
                    <Input name = 'username' label = 'User name:' />
                    <button type = 'submit'>Submit</button>
                </form>
            ) }
        </Formik>
    );
};


export default MyForm;
