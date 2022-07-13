import { Field } from 'formik';

export const Checkbox = (props) => {
    return (
        <Field name = { props.name }>
            { ({ field, form }) => {
                console.log('field');
                console.log(field);

                return (
                    <label>
                        <input
                            type = 'checkbox'
                            { ...props } // name="roles" value="admin"
                            checked = { field.value.includes(props.value) }
                            onChange = { () => {
                                if (field.value.includes(props.value)) {
                                    const nextValue = field.value.filter(
                                        (value) => value !== props.value,
                                    );
                                    form.setFieldValue(props.name, nextValue);
                                } else {
                                    const nextValue = field.value.concat(
                                        props.value,
                                    );
                                    form.setFieldValue(props.name, nextValue);
                                }
                            } } />
                        { props.value }
                    </label>
                );
            } }
        </Field>
    );
};
