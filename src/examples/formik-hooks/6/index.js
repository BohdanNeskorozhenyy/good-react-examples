import { useFormik } from 'formik';

export const Field = (props) => {
    return (
        <input
            type = { props.type }
            name = { props.name }
            onChange = { props.handleChange }
            onBlur = { props.handleBlur }
            value = { props.values.name }
            placeholder = { props.placeholder } />
    );
};

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit = { formik.handleSubmit }>
            <Field
                type = 'text'
                name = 'name'
                placeholder = 'Type your name here...'
                { ...formik } />
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
