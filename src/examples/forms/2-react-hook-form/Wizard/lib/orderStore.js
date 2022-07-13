/* Core */
import { makeAutoObservable } from 'mobx';

/* Instruments */
import { options } from './config';

export const initialState = {
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    product:   options[ 0 ].value,
};

class OrderStore {
    order = initialState;

    constructor() {
        makeAutoObservable(this);
    }

    saveOrder(nextOrder) {
        this.order = nextOrder;
    }

    resetOrder() {
        this.order = initialState;
    }
}

export const orderStore = new OrderStore();
