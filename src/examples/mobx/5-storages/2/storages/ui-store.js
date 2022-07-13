// Core
import { makeAutoObservable } from 'mobx';

export class UiStore {
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setStatus(status) {
        if (typeof status !== 'boolean') {

        }

        this.isLoading = status;
    }
}
