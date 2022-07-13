// Core
import React from 'react';
import { Navigate, Route, Routes, Outlet, NavLink } from 'react-router-dom';

// Components
import { Todos } from './Todos';
import { About } from './About';

// Styles
import '../styles/mains.scss';

export const App = () => {
    return (
        <section className='wrapper'>
            <nav className='navigation'>
                <NavLink
                    className='link'
                    activeClassName='active'
                    to='/todos' >
                    Задачи
                </NavLink>

                <NavLink
                    className='link'
                    activeClassName='active'
                    to='/about' >
                    О компании
                </NavLink>
            </nav>

            <h1 className='header'>Начинаем погружение в SSR</h1>

            <Routes>
                <Route path = '/' element = { <Outlet/> } >
                    <Route path = '/' element = { <Todos/> } />
                    <Route path = '/todos' element = { <Todos/> } />
                </Route>
                <Route path = '/about' element = { <About/> } />

                <Route path = '*' element = { <Navigate to = '/todos' replace /> } />
            </Routes>

            <Outlet />
        </section>
    );
};
