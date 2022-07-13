/* Core */
import * as yup from 'yup';

export const options = [
    { name: '💦 Вода', value: 'water' },
    { name: '🥚 Яйца', value: 'eggs' },
    { name: '🥭 Фрукты', value: 'fruits' },
];

export const schema = yup.object().shape({
    email:     yup.string().email('неправильная').required('*'),
    phone:     yup.string().required('*'),
    firstName: yup.string().min(5, 'минимум ${min} символов').required('*'),
    lastName:  yup.string().min(5, 'минимум ${min} символов').required('*'),
    product:   yup
        .string()
        .oneOf(options.map((option) => option.value))
        .required('*'),
});
