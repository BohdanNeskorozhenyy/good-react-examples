import { createPortal } from 'react-dom';

const target = document.getElementById('portal');

const Portal = ({ children }) => {
    return createPortal(children, target);
};

export { Portal };
