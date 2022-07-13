// Core
import { useContext } from 'react';

// Instruments
import { RootStore } from '../storages';
import { StoreContext } from '../contexts';

export const useStores = (): RootStore => useContext(StoreContext);
