const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Frodo',
        room: 'The Shire'
      },
      {
        id: '2',
        name: 'Arwen',
        room: 'Rivendell'
      },
      {
        id: '3',
        name: 'Samwise',
        room: 'The Shire'
      }
    ];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Gimli',
      room: 'Moria'
    };

    users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const removedUser = users.removeUser('1');

    expect(removedUser).toEqual({
      id: '1',
      name: 'Frodo',
      room: 'The Shire'
    });
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    const removedUser = users.removeUser('49');

    expect(removedUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userId = '2';
    const user = users.getUser(userId);

    expect(user).toEqual(users.users[1]);
  });

  it('should not find user', () => {
    const userId = '49';
    const user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for \'The Shire\' room', () => {
    const usersList = users.getUserList('The Shire');

    expect(usersList).toEqual(['Frodo', 'Samwise']);
  });

  it('should return names for \'Rivendell\' room', () => {
    const usersList = users.getUserList('Rivendell');

    expect(usersList).toEqual(['Arwen']);
  });

});
