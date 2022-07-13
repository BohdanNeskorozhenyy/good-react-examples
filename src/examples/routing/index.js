/* Core */
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import Example from './1-basic/1';

/* Instruments */
import './styles.scss';

export default () => {
    return (
        <Router>
            <Example />
        </Router>
    );
};
