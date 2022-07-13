/* Core */
import { useEffect } from 'react';
import {
    NavLink,
    Routes,
    Route,
    Navigate,
    Outlet,
    useParams,
    useNavigate,
} from 'react-router-dom';

/* Instruments */
import users from './_users-mock.json';

export const Nav = () => {
    return (
        <nav>
            <NavLink end to = '/'>
                Home
            </NavLink>
            <NavLink to = '/users/list'>All Users</NavLink>
        </nav>
    );
};

const UserList = () => {
    const usersJSX = users.map((user) => {
        return (
            <li key = { user.id }>
                <NavLink to = { `/users/${user.id}` }>
                    { user.firstName } { user.lastName }
                </NavLink>
            </li>
        );
    });

    return (
        <>
            <h1>Users</h1>
            <ul>{ usersJSX }</ul>
        </>
    );
};

export const UserProfile = () => {
    const navigate = useNavigate();
    const { userId } = useParams();

    const user = users.find((user) => user.id === userId);

    useEffect(() => {
        // ? Redirect if user by id is not found.
        !user && navigate('/users/list', { replace: true });
    }, []);

    return (
        <>
            <h1>
                Welcome, { user?.firstName } { user?.lastName }
            </h1>

            <p>User id: { userId }</p>
            <button onClick = { () => navigate('..') }>&larr; Назад</button>
        </>
    );
};

const UsersOutlet = () => {
    return (
        <>
            <UserList />

            <Outlet />
        </>
    );
};

const Example = () => {
    return (
        <>
            <Nav />

            <Routes>
                <Route path = '/' element = { <h1>Home</h1> } />

                <Route path = '/users' element = { <UsersOutlet /> }>
                    <Route path = ':userId' element = { <UserProfile /> } />
                    <Route path = 'list' element = { <Outlet /> } />
                    { /*
                        The <Outlet /> above renders the matched child for the route
                        which in this case points to <UserOutlet />.

                        In short: <Outlet /> render a route match!
                    */ }
                </Route>

                { /* Redirect if no route match found. */ }
                <Route path = '*' element = { <Navigate to = '/' /> } />
            </Routes>
        </>
    );
};

export default Example;
