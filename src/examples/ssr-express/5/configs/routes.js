import { Todos } from "../components/Todos";
import { About } from "../components/About";

export const routes = Object.freeze({
    root: {
        path: '/',
        exact: true,
        component: Todos,
    },
    todos: {
        path: '/todos',
        exact: true,
        component: Todos,
    },
    about: {
        path: '/about',
        exact: true,
        component: About,
    },
})
