import { useForm, useStep } from 'react-hooks-helper';

import { Names } from '../components/Names';
import { Address } from '../components/Address';
import { Submit } from '../components/Submit';

const steps = [
    { id: 'names' },
    { id: 'address' },
    { id: 'submit' },
];

const initialValues = {
    firstName: '',
    lastName:  '',
    address:   '',
};

export const Wizard = () => {
    const [formData, setForm] = useForm(initialValues);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    const props = { formData, setForm, navigation };

    switch (id) {
    case 'names':
        return <Names { ...props } />;
    case 'address':
        return <Address { ...props } />;
    case 'submit':
        return <Submit { ...props } />;
    default:
        return null;
    }
};
