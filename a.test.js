const isPallindrome = require('./a')
const setup = () => console.log('Setting up test environment')
const tearDown = () => console.log('Taking down test environment')
describe('test pallindromes', () => {

    beforeAll(() => setup());
    afterAll(() => tearDown());

    test('Alpha characters only', () => {
        expect(isPallindrome("abba")).toBe(true)
    });

    test('Not a pallindrome', () => {
        expect(isPallindrome("abca")).not.toBe(true)
    });

    test('Empty string', () => {
        expect(isPallindrome("")).toBe(true)
    });
    test('Whitespace', () => {
        expect(isPallindrome("evil olive")).toBe(true)
    });
    test('Punctuation and white space', () => {
        expect(isPallindrome("I did, did I?")).toBe(true)
    });
    test('Punctuation and white space', () => {
        expect(isPallindrome("Draw, O coward!")).toBe(true)
    });
    test('Numeric characters only', () => {
        expect(isPallindrome("12321")).toBe(true)
    });
    test('Multiple whitespaces', () => {
        expect(isPallindrome("     ")).toBe(true)
    });
    test('Punctuation and white space', () => {
        expect(isPallindrome("$%^&*   ;:{}")).toBe(true)
    });
    test('Long phrase', () => {
        expect(isPallindrome("A lot not new I saw as I went on to L.A.")).toBe(true)
    });
    test('Incorrect type input Number should be rejected', () => {
        expect(isPallindrome(123)).toBe(false);
    });

    test('Incorrect type input Null should be rejected', () => {
        expect(isPallindrome()).toBe(false);
    });

    test('Incorrect type input Float should be rejected', () => {
        expect(isPallindrome()).toBe(false);
    })




})
