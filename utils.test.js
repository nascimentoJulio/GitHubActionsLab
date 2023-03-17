const utils = require('./utils')

test('It should get same date', () => {
    expect(utils.date().getDate()).toBe(new Date().getDate());
  });
