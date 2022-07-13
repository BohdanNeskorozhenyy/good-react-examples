class Person {
    constructor(name) {
        this.name = name;
    }
}

const name = 'Jack';

test('«Person» constructor produces an object with name property toEqual', () => {
    expect(new Person(name)).toEqual({
        name,
    });
});

test('«Person» constructor produces an object with name property toStrictEqual', () => {
    expect(new Person(name)).toStrictEqual(new Person(name));
});
