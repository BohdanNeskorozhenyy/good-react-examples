// Core
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import { Entity } from './Entity';

// Instruments
import Styles from './styles.module.scss';
import { swapiActions } from '../bus/swapi/actions';

const selectState = (state) => ({
    vehicles:   state.swapi.vehicles,
    people:     state.swapi.people,
    planets:    state.swapi.planets,
    isFetching: state.swapi.isFetching,
});

export const Swapi = () => {
    const [page, setPage] = useState(1);
    const state = useSelector(selectState);
    const dispatch = useDispatch();

    const getAll = () => {
        const currentPage = page;
        const nextPage = currentPage === 4 ? 1 : currentPage + 1;

        dispatch(swapiActions.fetchAll(nextPage));
        setPage(nextPage);
    };

    return (
        <section className = { Styles.swapi }>
            <h1>SWAPI</h1>
            <div className = { Styles.getPrecise }>
                <button
                    className = { Styles.fetchAll }
                    disabled = { state.isFetching }
                    onClick = { getAll }>
                    📄 Получить все { page }-е страницы
                </button>
                <button
                    className = { Styles.cancelFetch }
                    disabled = { state.isFetching }
                    onClick = { () => dispatch(swapiActions.cancelFetch()) }>
                    ⛔ Отменить запрос
                </button>
            </div>
            <div className = { Styles.lists }>
                <Entity
                    disabled = { state.isFetching }
                    entities = { state.planets }
                    title = 'Планеты'
                    onClick = { (...props) => dispatch(swapiActions.fetchPlanetsAsync(...props))
                    } />
                <Entity
                    disabled = { state.isFetching }
                    entities = { state.vehicles }
                    title = 'Техника'
                    onClick = { (...props) => dispatch(swapiActions.fetchVehiclesAsync(...props))
                    } />
                <Entity
                    disabled = { state.isFetching }
                    entities = { state.people }
                    title = 'Люди'
                    onClick = { (...props) => dispatch(swapiActions.fetchPeopleAsync(...props))
                    } />
            </div>
        </section>
    );
};
