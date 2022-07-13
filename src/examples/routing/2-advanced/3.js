/* Core */
import {
    Routes, Route, NavLink, Outlet, Navigate,
} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Home</h1>

            <nav>
                <NavLink end to = '/'>
                    Home
                </NavLink>
                <NavLink to = '/dashboard'>Dashboard</NavLink>
            </nav>
            <hr />

            <Outlet />
        </>
    );
};

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>

            <nav>
                <NavLink end to = '..'>
                    Home
                </NavLink>
                <NavLink end to = '.'>
                    Dashboard
                </NavLink>
                <NavLink to = 'invoices'>Invoices</NavLink>
            </nav>
            <hr />

            <Outlet />
        </>
    );
};

const Example = () => {
    return (
        <Routes>
            <Route path = '/' element = { <Home /> }>
                <Route path = 'dashboard' element = { <Dashboard /> }>
                    { /* The /dashboard route will never render because there is already a route match! */ }
                    <Route path = '/dashboard' element = { <h1>❌</h1> } />
                    <Route path = '/' element = { <h1>Dashboard Home</h1> } />
                    <Route
                        path = 'invoices'
                        element = { <h1>Dashboard Invoices</h1> } />
                </Route>
            </Route>

            { /* Redirect if no route match found. */ }
            <Route path = '*' element = { <Navigate to = '/' /> } />
        </Routes>
    );
};

export default Example;
