/* Core */
import {
    Routes, Route, NavLink, Outlet, Navigate,
} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <NavLink end to = '/'>
                    Home
                </NavLink>
                <NavLink to = '/dashboard'>Dashboard</NavLink>
                <NavLink to = '/users'>Users</NavLink>
                <NavLink to = '/invoices'>Invoices</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    );
};

const Example = () => {
    return (
        <Routes>
            <Route path = '/' element = { <Layout /> }>
                { /* The «/» path below is relative to the parent address but not the app-wide «/» root path */ }
                <Route path = '/' element = { <h1>Welcome to the App!</h1> } />
                <Route path = '/dashboard' element = { <h1>Dashboard</h1> } />
                <Route path = '/users' element = { <h1>Users</h1> } />
                <Route path = '/invoices' element = { <h1>Invoices</h1> } />
            </Route>

            { /* Redirect if no route match found. */ }
            <Route path = '*' element = { <Navigate to = '/' /> } />
        </Routes>
    );
};

export default Example;
