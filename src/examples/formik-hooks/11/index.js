import { withFormik } from 'formik';

const MyForm = (props) => {
    console.log(props);

    const { handleSubmit, getFieldProps } = props;

    return (
        <form onSubmit = { handleSubmit }>
            <input
                type = 'text'
                placeholder = 'First name'
                { ...getFieldProps('fname') } />
            <input
                type = 'text'
                placeholder = 'Last name'
                { ...getFieldProps('lname') } />
            <button type = 'submit'>Submit</button>
        </form>
    );
};

const EnhancedForm = withFormik({
    mapPropsToValues: () => ({ fname: '', lname: '' }),
    validate:         (values) => {
        const errors = {};

        if (!values.fname) {
            errors.fname = 'Required';
        }

        return errors;
    },
    handleSubmit: (values) => {
        console.log(values);
    },
})(MyForm);

// withFormik({})(componnet)

export default EnhancedForm;
