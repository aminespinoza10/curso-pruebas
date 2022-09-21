const { generateAge, generateNumber, generateMail } = require('./util')

test('debería mostrar el nombre y edad', () => {
    const text = generateAge('Felipe', 23);
    expect(text).toBe('Felipe (23 años)');
});

test('debería mostrar el nombre y telefono', () => {
    const text = generateNumber('Felipe', 5586048520);
    expect(text).toBe('Felipe (5586048520, móbil)');
});

test('debería mostrar el nombre y mail', () => {
    const text = generateMail('Felipe', 'febeja@microsft.com');
    expect(text).toBe('Felipe (Tu correo es: febeja@microsft.com)');
});