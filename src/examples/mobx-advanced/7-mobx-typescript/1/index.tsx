import { StoreProvider } from './contexts';
import { Todo } from './Todo';

import { store } from './storages';

const Wrapper: React.FC = () => {
    return (
        <StoreProvider store={store}>
            <Todo />
        </StoreProvider>
    )
};

export default Wrapper;
