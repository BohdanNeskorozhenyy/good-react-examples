import { ItemForm } from './ItemForm';

export const Names = ({ setForm, formData, navigation }) => {
    const { firstName, lastName } = formData;

    const { next } = navigation;

    return (
        <div className = 'form'>
            <h3>Контактные данные</h3>
            <ItemForm
                label = 'Имя'
                name = 'firstName'
                value = { firstName }
                onChange = { setForm } />
            <ItemForm
                label = 'Фамилия'
                name = 'lastName'
                value = { lastName }
                onChange = { setForm } />
            <div>
                <button className = 'next-btn' onClick = { next }>→</button>
            </div>
        </div>
    );
};
