import { Formik } from 'formik';

import { Checkbox } from '../elements';

const MyForm = () => {
    const initialValues = {
        roles: ['customer'],
    };

    return (
        <Formik
            initialValues = { initialValues }
            onSubmit = { (values) => {
                console.log(values);
            } }>
            { (props) => (
                <form onSubmit = { props.handleSubmit }>
                    <Checkbox name = 'roles' value = 'admin' />
                    <Checkbox name = 'roles' value = 'customer' />
                    <button type = 'submit'>Submit</button>
                </form>
            ) }
        </Formik>
    );
};

export default MyForm;
