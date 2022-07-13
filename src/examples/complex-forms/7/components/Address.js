import { ItemForm } from './ItemForm';

export const Address = ({ setForm, formData, navigation }) => {
    const { address } = formData;

    const { previous, next } = navigation;

    return (
        <div className = 'form'>
            <h3>Прописка</h3>
            <ItemForm
                label = 'Адрес'
                name = 'address'
                value = { address }
                onChange = { setForm } />
            <div>
                <button className = 'next-btn' onClick = { previous }>←</button>
                <button className = 'next-btn' onClick = { next }>→</button>
            </div>
        </div>
    );
};
