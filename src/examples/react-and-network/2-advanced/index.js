/* Core */
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

/* Components */
import { Layout } from './components';
import { TodoListView, TodoByIdView } from './3';

/* Instruments */
import './styles.scss';
import { queryClient } from './hooks/react-query';

const App = () => {
    return (
        <QueryClientProvider client = { queryClient }>
            <Router>
                <Routes>
                    <Layout>
                        <Route path = '/' element = { <TodoListView /> } />
                        <Route path = '/:todoId' element = { <TodoByIdView /> } />
                        <Route path = '*' element = { <Navigate to = '/' /> } />
                    </Layout>
                </Routes>
            </Router>
            { /* <ReactQueryDevtools initialIsOpen={false} /> */ }
        </QueryClientProvider>
    );
};

export default App;
