/* Core */
import {
    string, number, shape, arrayOf,
} from 'prop-types';

const Parent = (props) => {
    const favoriteSpellsJSX = props.favoriteSpells.map((spell) => (
        <li key = { spell.id }>
            Type: <b>{ spell.description.type }</b>, value:{ ' ' }
            <b>{ spell.description.value }</b>;
        </li>
    ));

    return (
        <>
            <h1>
                Hello! I am { props.firstName } { props.lastName }, and I am{ ' ' }
                { props.age }.
            </h1>
            <ul>{ favoriteSpellsJSX }</ul>
        </>
    );
};

Parent.propTypes = {
    age:            number.isRequired,
    firstName:      string.isRequired,
    lastName:       string.isRequired,
    favoriteSpells: arrayOf(
        shape({
            id:          string.isRequired,
            description: shape({
                type:  string.isRequired,
                value: number.isRequired,
            }),
        }),
    ),
};

const data = {
    firstName:      'Gendalf',
    lastName:       'the White',
    age:            6000,
    favoriteSpells: [
        {
            id:          '123',
            description: { type: 'Fireball', value: 44 },
        },
        { id: '456', description: { type: 'Ice shard', value: 45 } },
    ],
};

const Wrapper = () => {
    return <Parent { ...data } />;
};

export default Wrapper;
