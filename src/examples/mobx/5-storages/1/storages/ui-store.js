// Core
import { makeAutoObservable } from 'mobx';

class UiStore {
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

export const uiStore = new UiStore();
