// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber()
test('testing good phone number #1', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('testing good phone number #2', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('testing bad phone number #1', () => {
    expect(functions.isPhoneNumber('17890')).toBe(false);
});

test('testing bad phone number #2', () => {
    expect(functions.isPhoneNumber('12')).toBe(false);
});

// isEmail()

test('testing good email #1', () => {
    expect(functions.isEmail('kmwong@ucsd.edu')).toBe(true);
});

test('testing good email #2', () => {
    expect(functions.isEmail('hithere@gmail.com')).toBe(true);
});

test('testing bad email #1', () => {
    expect(functions.isEmail('hello')).toBe(false);
});

test('testing bad email #2', () => {
    expect(functions.isEmail('980909090')).toBe(false);
});

// isStrongPassword()

test('testing good password #1', () => {
    expect(functions.isStrongPassword('Stronger_')).toBe(true);
});

test('testing good password #2', () => {
    expect(functions.isStrongPassword('isStrong_')).toBe(true);
});

test('testing bad password #1', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

test('testing bad password #2', () => {
    expect(functions.isStrongPassword('hghsighsgsghusoihdigdsgdsg')).toBe(false);
});

// isDate()

test('testing good date #1', () => {
    expect(functions.isDate('03/29/2001')).toBe(true);
});

test('testing good date #2', () => {
    expect(functions.isDate('12/25/2001')).toBe(true);
});

test('testing bad date #1', () => {
    expect(functions.isDate('123/456/678')).toBe(false);
});

test('testing bad date #2', () => {
    expect(functions.isDate('12344')).toBe(false);
});

// isHexColor()

test('testing good hex #1', () => {
    expect(functions.isHexColor('#AAA')).toBe(true);
});

test('testing good hex #2', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('testing bad hex #1', () => {
    expect(functions.isHexColor('#12345633')).toBe(false);
});

test('testing bad hex #2', () => {
    expect(functions.isHexColor('######')).toBe(false);
});


