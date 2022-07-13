import { useFormik, Field } from 'formik';

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    // <Field>, <FastField>, <ErrorMessage>, connect(), and <FieldArray>
    return (
        <form onSubmit = { formik.handleSubmit }>
            <Field // Error formik.getFieldProps is not a function
                type = 'text'
                name = 'name'
                placeholder = 'Type your name here...' />
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
