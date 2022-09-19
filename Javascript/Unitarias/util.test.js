const { generateAge } = require('./util')

test('debería mostrar el nombre y edad', () => {
    const text = generateAge('Felipe', 23);
    expect(text).toBe('Felipe (23 años)');
});