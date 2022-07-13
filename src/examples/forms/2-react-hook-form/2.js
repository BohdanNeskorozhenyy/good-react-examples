/* Core */
import { useForm } from 'react-hook-form';

const Form = () => {
    const form = useForm({
        defaultValues: {
            email:    '',
            password: '',
            account:  'google',
        },
    });

    const submitForm = form.handleSubmit((values) => {
        console.log(values);
        form.reset();
    });

    console.log('🖥 Рендер:', form.watch(['email', 'password']));
    // ? Или: form.watch('email'), form.watch()

    return (
        <form onSubmit = { submitForm } onReset = { form.reset }>
            <h1>Логин</h1>

            <label>
                Электропочта { form.formState.errors.email && <span>*</span> }
                <input
                    type = 'email'
                    autoComplete = 'email'
                    { ...form.register('email', { required: true }) } />
            </label>

            <label>
                Пароль { form.formState.errors.password && <span>*</span> }
                <input
                    type = 'password'
                    autoComplete = 'current-password'
                    { ...form.register('password', { required: true }) } />
            </label>

            <label>
                Аккаунт { form.formState.errors.account && <span>*</span> }
                <select { ...form.register('account', { required: true }) }>
                    <option value = 'facebook'>Facebook</option>
                    <option value = 'instagram'>Instagram</option>
                    <option value = 'google'>Google</option>
                </select>
            </label>

            <div className = 'controls'>
                <button type = 'submit'>Зарегистрироваться</button>
                <button type = 'reset'>Сбросить</button>
            </div>
        </form>
    );
};

export default Form;
