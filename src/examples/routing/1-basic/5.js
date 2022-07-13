/* Core */
import {
    Routes, Route, NavLink, Outlet, Navigate,
} from 'react-router-dom';

const MainNav = () => {
    return (
        <>
            <nav>
                <NavLink to = '/' end>
                    Home
                </NavLink>
                <NavLink to = '/dashboard'>Dashboard</NavLink>
            </nav>

            <h1>Home</h1>
            <hr />

            <Outlet />
        </>
    );
};

const Dashboard = () => {
    return (
        <>
            <nav>
                <NavLink to = 'invoices'>Invoices</NavLink>
                <NavLink to = 'team'>Team</NavLink>
            </nav>

            <h1>Dashboard</h1>
            <hr />

            <Outlet />
        </>
    );
};

const Example = () => {
    return (
        <Routes>
            <Route path = '/' element = { <MainNav /> }>
                <Route path = 'dashboard' element = { <Dashboard /> }>
                    <Route path = 'invoices' element = { <h1>Invoices</h1> } />
                    <Route path = 'team' element = { <h1>Team</h1> } />
                </Route>
            </Route>

            { /* Redirect if no route match found. */ }
            <Route path = '*' element = { <Navigate to = '/' replace /> } />
        </Routes>
    );
};

export default Example;
