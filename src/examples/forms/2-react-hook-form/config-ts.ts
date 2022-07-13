/* Core */
import * as yup from 'yup';

export interface FormValues {
    email: string;
    password: string;
    account: string;
}

export const options = [
    { name: 'Facebook', value: 'facebook' },
    { name: 'Instagram', value: 'instagram' },
    { name: 'Google', value: 'google' },
];

export const schema: yup.SchemaOf<FormValues> = yup
    .object()
    .shape({
        email: yup.string().email().defined('*'),
        password: yup
            .string()
            .min(5, 'минимальная длина ${min}')
            .required('*')
            .defined(),
        account: yup
            .string()
            .oneOf(
                options.slice(0, 2).map(option => option.value),
                'только ${values}',
            )
            .defined(),
    })
    .defined();

/* Types */
// export interface Values extends yup.TypeOf<typeof schema> {}
