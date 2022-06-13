const isPallindrome = require('./a')
const setup = () => console.log('Setting up test environment')
const tearDown = () => console.log('Taking down test environment')
describe('test pallindromes', () => {

    beforeAll(() => setup());
    afterAll(() => tearDown());

    test('String: abba', () => {
        expect(isPallindrome("abba")).toBe(true)
    });

    test('String: abca should not pass', () => {
        expect(isPallindrome("abca")).not.toBe(true)
    });

    test('String: null', () => {
        expect(isPallindrome("")).toBe(true)
    });
    test('String: evil olive', () => {
        expect(isPallindrome("evil olive")).toBe(true)
    });
    test('String: I did, did I?', () => {
        expect(isPallindrome("I did, did I?")).toBe(true)
    });
    test('String: Draw, O coward!', () => {
        expect(isPallindrome("Draw, O coward!")).toBe(true)
    });
    test('String: 12321', () => {
        expect(isPallindrome("12321")).toBe(true)
    });
    test('String:     ', () => {
        expect(isPallindrome("     ")).toBe(true)
    });
    test('String: $%^&*   ;:{}', () => {
        expect(isPallindrome("$%^&*   ;:{}")).toBe(true)
    });
    test('String: A lot not new I saw as I went on to L.A.', () => {
        expect(isPallindrome("A lot not new I saw as I went on to L.A.")).toBe(true)
    });




})
