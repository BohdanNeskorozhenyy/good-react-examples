export const Input = (props) => {
    console.log(props);

    return (
        <>
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
            {
                props.touched[ props.name ] && props.errors[ props.name ]
                    ? <p>{ props.errors[ props.name ] }</p>
                    : null
            }
        </>
    );
};
