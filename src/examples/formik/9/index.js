import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(9, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const MyForm = () => {
    const initialValues = {
        name:  '',
        email: '',
    };

    return (
        <Formik
            initialValues = { initialValues }
            validationSchema = { validationSchema }
            onSubmit = { (values) => {
                console.log(values);
            } }>
            { ({ errors, touched, handleSubmit }) => (
                <form onSubmit = { handleSubmit }>
                    <Field type = 'text' name = 'name' />
                    { errors.name && touched.name && <div>{ errors.name }</div> }
                    <Field type = 'email' name = 'email' />
                    { errors.email && touched.email && <div>{ errors.email }</div> }
                    <button type = 'submit'>Submit</button>
                </form>
            ) }
        </Formik>
    );
};

export default MyForm;
