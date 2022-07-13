import { useField } from 'formik';

export const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>
                { label }
                <input { ...field } { ...props } />
            </label>
            { meta.touched && meta.error ? <p style = { { color: 'red' } }>{ meta.error }</p> : null }
        </>
    );
};
