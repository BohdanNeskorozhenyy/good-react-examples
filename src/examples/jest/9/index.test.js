// Core
import { v4 } from 'uuid';

class User {
    constructor(name) {
        this.name = name;
        this.created = new Date();
        this.id = v4(); // Уникальный идентификатор
    }
}

// Будет ломаться каждый раз
// test('«User» constructor should match its snapshot', () => {
//     expect(new User('Jack')).toMatchSnapshot();
// });

test('«User» constructor should match its snapshot inline', () => {
    expect(new User('Jack')).toMatchSnapshot({
        created: expect.any(Date),
        id:      expect.any(String),
    });
});
