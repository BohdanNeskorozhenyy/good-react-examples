import { useState } from 'react';
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

    console.log('render');

    const [formValues, setValue] = useState(initialValues);

    const handleChange = (name, value) => {
        const newFormValues = {
            ...formValues,
            [ name ]: value,
        };

        setValue(newFormValues);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    const elJSX = data.map((item, index) => <Input
        key = { index }
        { ...item }
        value = { formValues[ item.name ] }
        handleChange = { handleChange } />);

    return (
        <form onSubmit = { handleSubmit }>
            { elJSX }
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
