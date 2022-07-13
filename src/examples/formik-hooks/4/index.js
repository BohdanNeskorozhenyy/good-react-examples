import { useFormik } from 'formik';

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    console.log(formik);

    return (
        <form onSubmit = { formik.handleSubmit }>
            <input
                type = 'text'
                onChange = { formik.handleChange }
                onBlur = { formik.handleBlur }
                value = { formik.values.username }
                name = 'username' />
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
