export const ItemForm = ({
    label, children, type = 'text', ...otherProps
}) => (
    <div>
        { type === 'text' ? (
            <>
                <label>{ label }</label>
                <input type = { type } { ...otherProps } />
            </>
        ) : (
            <>
                <label />
                <input type = { type } { ...otherProps } />
                { label }
            </>
        ) }
    </div>
);
