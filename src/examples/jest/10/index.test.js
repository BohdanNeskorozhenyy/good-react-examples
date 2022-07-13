global.Date = jest.fn();

class User {
    constructor(name) {
        this.name = name;
        this.created = new Date();
    }
}

test('«User» constructor should match its snapshot inline', () => {
    expect(new User('Jack')).toMatchSnapshot();
    // expect(Date).toHaveBeenCalledWith(1);
});
