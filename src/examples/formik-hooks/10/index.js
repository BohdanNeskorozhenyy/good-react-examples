import { useFormik } from 'formik';

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            fname:    '',
            lname:    '',
            nickname: '',
        },
        onSubmit: (values) => {
            if (values.nickname.length < 1) {
                const user = {
                    ...values,
                    nickname: `@${values.fname.charAt(0)}${values.lname}`,
                };

                formik.setValues(user);
            }
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
                type = 'text'
                placeholder = 'Nickname'
                { ...formik.getFieldProps('nickname') } />
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
