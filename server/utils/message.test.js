const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    const from = 'Gandalf';
    const text = 'A wizard is never late!';

    const message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, text });
  });

});

describe('generateLocationMessage', () => {

  it('should generate the correct location message', () => {
    const from = 'Elrond';
    const latitude = 33.817;
    const longitude = -27.344;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const message = generateLocationMessage(from, latitude, longitude);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, url });
  });

});
