export const Input = (props) => {
    return (
        <label>
            { props.label } { props.error && <span>{ props.error.message }</span> }
            <input
                type = { props.type }
                autoComplete = { props.autoComplete }
                { ...props.register } />
        </label>
    );
};

Input.defaultProps = {
    type: 'text',
};
