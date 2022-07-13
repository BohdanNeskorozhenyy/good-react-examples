import React from 'react';

export const Input = (props) => {
    const handleChange = ({ target }) => {
        const value = target.type === 'checkbox'
            ? Boolean(target.checked) // !!target.checked
            : target.value;

        props.handleChange(props.name, value);
    };

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
                    onChange = { handleChange } />
            </label>
            {
                props.touched[ props.name ] && props.errors[ props.name ]
                    ? <p>{ props.errors[ props.name ] }</p>
                    : null
            }
        </>
    );
};
