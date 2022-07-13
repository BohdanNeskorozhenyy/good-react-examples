// Core
import { useSelector } from 'react-redux';

// Other
import { useFetchPlanets } from '../hooks/useFetchPlanets';
import { selectPlanetsWithFetchingState } from '../redux/selectors/selectPlanetsWithFetchingState';

export const Planets = () => {
    const { load } = useFetchPlanets();
    const { planets, isFetching } = useSelector(selectPlanetsWithFetchingState);

    const planetsJSX = Array.isArray(planets)
        && planets.map(({ name }) => <li key = { name } >{ name }</li>);
    const isPlanetsLoaded = Array.isArray(planets) && !planets.length && !isFetching;

    return (
        <section>
            <h1>Планеты</h1>
            <button onClick = { load }>Загрузить список планет</button>
            { isPlanetsLoaded && <p>Данные ещё не загружались!</p> }
            { isFetching && <p>Загрузка планет...</p> }
            { !isFetching && <ul>{ planetsJSX }</ul> }
        </section>
    );
};
