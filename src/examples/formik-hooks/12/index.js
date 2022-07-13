import DatePicker from 'react-datepicker';
import { useFormik } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            date: new Date(),
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit = { formik.handleSubmit }>
            <DatePicker
                name = 'date'
                selected = { formik.getFieldProps('date').value }
                onChange = { (date) => {
                    formik.setFieldValue('date', date);
                } } />
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
