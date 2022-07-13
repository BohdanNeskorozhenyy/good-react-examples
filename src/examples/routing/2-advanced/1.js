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
        <>
            <nav>
                <NavLink end to = '/'>
                    Home
                </NavLink>
                <NavLink to = '/user/list'>All Users</NavLink>
            </nav>

            <Outlet />
        </>
    );
};

const UserList = () => {
    const usersJSX = users.map((user) => {
        return (
            <li key = { user.id }>
                <NavLink to = { `/user/${user.id}` }>
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
        !user && navigate('/user/list', { replace: true });
    }, []);

    return (
        <>
            <h1>
                Welcome, { user?.firstName } { user?.lastName }
            </h1>

            <p>User id: { userId }</p>
            <button onClick = { () => navigate(-1) }>&larr; Назад</button>
        </>
    );
};

const Example = () => {
    return (
        <>
            <Routes>
                <Nav>
                    <Route path = '/' element = { <h1>Home</h1> } />
                    <Route path = '/user/:userId' element = { <UserProfile /> } />
                    <Route path = '/user/list' element = { <UserList /> } />

                    { /* Redirect if no route match found. */ }
                    <Route path = '*' element = { <Navigate to = '/' /> } />
                </Nav>
            </Routes>
        </>
    );
};

export default Example;
