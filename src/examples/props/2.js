const Child = (props) => {
    const { firstName, lastName } = props;

    return (
        <h1>
            Hi, { firstName } { lastName }!
        </h1>
    );
};

const profile = {
    firstName: 'Hermione',
    lastName:  'Granger',
    age:       20,
};

const Parent = () => {
    return (
        <>
            <Child { ...profile } />
            <Child firstName = { profile.firstName } lastName = { profile.lastName } />
        </>
    );
};

export default Parent;
