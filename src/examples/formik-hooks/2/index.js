/* eslint-disable no-unused-vars */
import { Formik, useField } from 'formik';

const ButtonsGroup = (props) => {
    const [field, meta, helpers] = useField(props.name);

    const { value } = meta;
    const { setValue } = helpers;

    // setValue(5) → meta.value = 5
    console.log(meta);

    const isSelected = (v) => (v === value ? 'selected' : '');

    return (
        <div>
            <button
                type = 'button' onClick = { () => setValue(5) }
                className = { isSelected(5) }>
        5
            </button>
            <button
                type = 'button' onClick = { () => setValue(10) }
                className = { isSelected(10) }>
        10
            </button>
            <button
                type = 'button' onClick = { () => setValue(25) }
                className = { isSelected(25) }>
        25
            </button>
        </div>
    );
};

const MyForm = () => {
    const initialValues = {
        pagination: 5,
    };

    return (
        <Formik
            initialValues = { initialValues }
            onSubmit = { (values) => {
                console.log(values);
            } }>
            { (props) => (
                <form onSubmit = { props.handleSubmit }>
                    <ButtonsGroup name = 'pagination' />
                    <button type = 'submit'>Submit</button>
                </form>
            ) }
        </Formik>
    );
};


export default MyForm;
