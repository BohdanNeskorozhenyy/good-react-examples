/* Core */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

/* Components */
import { Input, Select } from './components';

/* Instruments */
import { options } from './config';

const Form = () => {
    const form = useForm({
        mode:          'onBlur',
        defaultValues: {
            email:    '',
            password: '',
            account:  'google',
        },
    });

    const submitForm = form.handleSubmit(() => {
        console.log(form.getValues());
        console.log(form.getValues('email'));
        console.log(form.getValues(['email', 'password']));

        form.reset();
    });

    useEffect(() => {
        form.setFocus('email');
    }, []);

    console.log('🖥 Рендер.');

    return (
        <form onSubmit = { submitForm }>
            <h1>Логин</h1>

            <Input
                label = 'Электропочта'
                error = { form.formState.errors.email }
                type = 'email'
                autoComplete = 'email'
                register = { form.register('email', {
                    required: '*',
                    validate: {
                        gmailOnly(email) {
                            return !email.endsWith('@gmail.com')
                                ? 'должна быть gmail'
                                : true;
                        },
                    },
                }) } />

            <Input
                label = 'Пароль'
                error = { form.formState.errors.password }
                type = 'password'
                autoComplete = 'current-password'
                register = { form.register('password', {
                    required:  '*',
                    minLength: {
                        value:   5,
                        message: 'слишком короткий!',
                    },
                }) } />

            <Select
                label = 'Аккаунт'
                error = { form.formState.errors.account }
                register = { form.register('account', { required: true }) }
                options = { options } />

            <button type = 'submit'>Войти</button>
        </form>
    );
};

export default Form;
