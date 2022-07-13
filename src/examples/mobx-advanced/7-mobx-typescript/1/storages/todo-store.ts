// Core
import { makeAutoObservable } from 'mobx';

export interface ITodoStore {
    title: string;
    id: string;
    setTitle: (value: string) => void;
}

export class TodoStore implements ITodoStore {
    title = 'Изучить MobX';
    private internalId: number = Date.now();
    private meta = 'v1';

    constructor() {
        makeAutoObservable(this);
    }

    get id () {
        return `${this.internalId}${this.meta}`;
    }

    setTitle(value: string): void {
        this.title = value;
    }
};
