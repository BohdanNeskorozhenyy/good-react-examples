/* Core */
import { string, bool } from 'prop-types';

export const Parent = (props) => {
    return (
        props.visible && (
            <h1>
                Name { props.firstName } { props.lastName }
            </h1>
        )
    );
};

Parent.defaultProps = {
    visible:   true,
    firstName: 'Anton',
    lastName:  '️❗️ NO_LAST_NAME',
};

Parent.propTypes = {
    visible:   bool.isRequired,
    firstName: string.isRequired,
    lastName:  string.isRequired,
};

export default Parent;
