import { useFormik } from 'formik';
import data from './form.json';

const Input = (props) => {
    return (
        <label>
            { props.label }
            <input
                value = { props.value }
                placeholder = { props.placeholder }
                required = { props.required }
                type = { props.type }
                name = { props.name }
                onChange = { (event) => props.handleChange(props.name, event.target.value) } />
        </label>
    );
};

const MyForm = () => {
    const initialValues = {};
    data.forEach(({ name }) => initialValues[ name ] = '');

    const formik = useFormik({
        initialValues,
        onSubmit(values) {
            console.log(values);
        },
    });

    const elJSX = data.map((filed, index) => <Input
        key = { index }
        { ...filed }
        { ...formik.getFieldProps(filed.name) }
        handleChange = { formik.setFieldValue } />);

    return (
        <form onSubmit = { formik.handleSubmit }>
            { elJSX }
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
