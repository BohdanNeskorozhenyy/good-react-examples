/* Core */
import { useNavigate } from 'react-router-dom';

/* Instruments */
import './styles.scss';

export const Start = () => {
    const navigate = useNavigate();

    const startOrder = () => {
        navigate('/order/step-1');
    };

    return (
        <section>
            <h1>Добро пожаловать</h1>
            <button onClick = { startOrder }>Собрать заказ &rarr;</button>
        </section>
    );
};
