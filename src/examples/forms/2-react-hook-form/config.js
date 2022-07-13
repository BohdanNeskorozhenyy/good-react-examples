/* Core */
import * as yup from 'yup';

export const options = [
    { name: 'Facebook', value: 'facebook' },
    { name: 'Instagram', value: 'instagram' },
    { name: 'Google', value: 'google' },
];

export const schema = yup.object().shape({
    email:    yup.string().email().required('*'),
    password: yup.string().min(5, 'минимальная длина ${min}').required('*'),
    account:  yup.string().oneOf(
        options.slice(0, 2).map((option) => option.value),
        'только ${values}',
    ),
});
