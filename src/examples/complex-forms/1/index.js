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

    return (
        <form>
            { elJSX }
            <button type = 'submit'>Submit</button>
        </form>
    );
};


export default MyForm;
