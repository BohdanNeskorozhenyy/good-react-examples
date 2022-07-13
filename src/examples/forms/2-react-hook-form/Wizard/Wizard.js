/* Core */
import { useEffect } from 'react';
import {
    Routes, Route, Navigate, useNavigate,
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';

/* Components */
import {
    Start, Step1, Step2, Step3, Finish, Nav,
} from './components';

/* Instruments */
import { schema, orderStore } from './lib';

export const Wizard = observer(() => {
    const navigate = useNavigate();

    const form = useForm({
        mode:          'onTouched',
        resolver:      yupResolver(schema),
        defaultValues: orderStore.order,
    });

    const submitForm = form.handleSubmit(() => {
        navigate('/order/finish');
    });

    const resetForm = () => {
        form.reset();
        orderStore.resetOrder();
        navigate('/order/start');
    };

    useEffect(() => {
        return () => {
            orderStore.saveOrder(form.getValues());
        };
    }, []);

    return (
        <form onSubmit = { submitForm } onReset = { resetForm }>
            <Routes>
                <Nav form = { form }>
                    <Route path = 'start' element = { <Start /> } />
                    <Route path = 'step-1' element = { <Step1 form = { form } /> } />
                    <Route path = 'step-2' element = { <Step2 form = { form } /> } />
                    <Route path = 'step-3' element = { <Step3 form = { form } /> } />
                    <Route path = 'finish' element = { <Finish form = { form } /> } />

                    <Route path = '/' element = { <Navigate to = 'start' /> } />
                    <Route path = '*' element = { <Navigate to = 'start' /> } />
                </Nav>
            </Routes>
        </form>
    );
});
