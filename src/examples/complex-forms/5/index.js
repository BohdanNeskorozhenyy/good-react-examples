import { useFormik } from 'formik';
import data from './form.json';

import { Input } from './Input';
import { getValidationSchema } from './getValidationSchema';

const MyForm = () => {
    const initialValues = {};
    data.forEach(({ name }) => initialValues[ name ] = '');
    const validationSchema = getValidationSchema(data);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit(values) {
            console.log(values);
        },
    });

    const elJSX = data.map((item, index) => <Input
        key = { index }
        { ...item }
        { ...formik }
        handleChange = { formik.setFieldValue } />);

    return (
        <form onSubmit = { formik.handleSubmit }>
            { elJSX }
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
