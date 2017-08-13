'use strict'
const test = require('tape');
require('dotenv').config()

const {
  hashPassword,
  comparePasswords
} = require('./index.js')

// test('password is being hashed correctly', () =>
//   hashPassword('wehey', (err, res) => {
//     expect(err).toBe(null)
//     expect(res.substring(0, 4)).toBe('$2a$')
//   })
// )
test('test one', (t) => {
  hashPassworld('wehey', (err, res) => {
    t.equal(err, null);
    t.equal(res.substring(0, 4), '$2a$');
    t.end();
  })
});




test('passwords are being validated correctly - pass', () =>
  hashPassword('pa$$w0rd', (err, hashedPw) => {
    expect(err).toBe(null)
    comparePasswords('pa$$w0rd', hashedPw, (err, correct) => {
      expect(err).toBe(null)
      expect(correct).toBe(true)
    })
  })
)

test('passwords are being validated correctly - pass', () =>
  hashPassword('pa$$w0rd', (err, hashedPw) => {
    expect(err).toBe(null)
    comparePasswords('WRONG', hashedPw, (err, correct) => {
      expect(err).toBe(null)
      expect(correct).toBe(false)
    })
  })
)
