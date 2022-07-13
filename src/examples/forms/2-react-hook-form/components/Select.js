export const Select = (props) => {
    const optionsJSX = props.options.map((option) => {
        return (
            <option value = { option.value } key = { option.value }>
                { option.name }
            </option>
        );
    });

    return (
        <label>
            { props.label } { props.error && <span>{ props.error.message }</span> }
            <select { ...props.register }>{ optionsJSX }</select>
        </label>
    );
};
