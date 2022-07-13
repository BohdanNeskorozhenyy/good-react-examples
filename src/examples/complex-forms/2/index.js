import data from './form.json';

const Input = (props) => {
    return (
        <label>
            { props.label }
            <input
                placeholder = { props.placeholder }
                required = { props.required }
                type = { props.type }
                name = { props.name } />
        </label>
    );
};

const MyForm = () => {
    const elJSX = data.map((item, index) => <Input key = { index } { ...item } />);

    console.log('render');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const user = {};

        for (const { name } of data) {
            user[ name ] = formData.get(name);
        }

        // validate → set errors to state → display errors

        console.log(user);
    };

    return (
        <form onSubmit = { handleSubmit }>
            { elJSX }
            <button type = 'submit'>Submit</button>
        </form>
    );
};

export default MyForm;
