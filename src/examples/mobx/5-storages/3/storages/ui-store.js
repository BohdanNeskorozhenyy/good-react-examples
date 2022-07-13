// Core
import { makeAutoObservable } from 'mobx';

export class UiStore {
    isLoading = false;

    constructor(rootStore) {
        makeAutoObservable(this, { rootStore: false });

        rootStore.setIsLoading = this.setIsLoading;
    }

    async setIsLoading(status) {
        this.isLoading = status;
    }
}
