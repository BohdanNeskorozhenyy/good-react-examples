import { useFormik } from 'formik';

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit = { formik.handleSubmit }>
            <input
                type = 'text'
                placeholder = 'First name'
                { ...formik.getFieldProps('fname') } />
            <input
                type = 'text'
                placeholder = 'Last name'
                { ...formik.getFieldProps('lname') } />
            <input
                type = 'email'
                placeholder = 'Email'
                { ...formik.getFieldProps('email') } />
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
