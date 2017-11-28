const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    const from = 'Gandalf';
    const text = 'A wizard is never late!';

    const message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, text });

  });

});
